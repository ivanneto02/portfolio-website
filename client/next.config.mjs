import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ["d2zcny2mccgucp.cloudfront.net", "placehold.co"],
    },
    // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [['remark-gfm', { strict: true, throwOnError: true }]],
        rehypePlugins: [['rehype-highlight', {
            strict: true,
            throwOnError: true,
            detect: true,
        }]],
    },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
