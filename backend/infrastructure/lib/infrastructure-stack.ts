import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

const origins = require('aws-cdk-lib/aws-cloudfront-origins')
const s3 = require('aws-cdk-lib/aws-s3');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');

/* Contains the stack to make my images be displayed on
 * my website. S3 bucket will be accessible via an IAM
 * role, and key will be provided at the time of access. */
export class PortfolioWebsiteImagesStack extends cdk.Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // S3 bucket will hold EVERY image on my website and cache them on
        // CloudFront so it can then distribute them. This should prevent abuse
        // and save me some money since the images will be cached.
        const portfolioImagesBucket = new s3.Bucket(this, "PortfolioWebsiteImagesBucket", {
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            accessControl: s3.BucketAccessControl.PRIVATE,
            removalPolicy: cdk.RemovalPolicy.RETAIN,
        });

        portfolioImagesBucket.addCorsRule({
            allowedOrigins: ["*"],
            allowedMethods: [s3.HttpMethods.GET],
            allowedHeaders: ["*"],
        });

        // CloudFront will cache these images and distribute them appropriate. Since
        // this service comes with AWS Shield Standard included, it should prevent DDoS attacks
        // on layers 3 and 4.
        const cloudFrontDistribution = new cloudfront.Distribution(this, "PortfolioWebsiteImagesCDN", {
            defaultBehavior: {
                origin: origins.S3BucketOrigin.withOriginAccessControl(portfolioImagesBucket),
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
            }
        });

        new cdk.CfnOutput(this, "PortfolioWebsiteImagesCDNURL", {
            value: cloudFrontDistribution.distributionDomainName,
        });

        // // handles calls to the endpoint to list contents of an S3 directory
        // // The request uses the directory name to list out all the images, taking away the need to have
        // // a manifest.json file that needs to be updated when images get uploaded
        // const lambdaListS3DirectoryContents = new lambda.Function(this, "ListS3DirectoryContentsFunction", {
        //         code: lambda.Code.fromAsset("lib/functions/listS3DirectoryContentsFunction"),
        //         runtime: lambda.Runtime.NODEJS_LATEST,
        //         handler: 'index.handler',
        // });
        //
        // imagesBucket.grantRead(lambdaListS3DirectoryContents);
        //
        // // executes lambdaListS3DirectoryContents function.
        // const lambdaListS3DirectoryContentsEndpoint = new apigateway.LambdaRestApi(this, "ListS3DirectoryContentsEndpoint", {
        //         handler: lambdaListS3DirectoryContents,
        //         restApiName: "ListS3DirectoryContentsRestAPI",
        // });
    }
}
