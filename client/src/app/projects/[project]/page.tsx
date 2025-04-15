import dynamic from "next/dynamic";
import { Page } from "@/app/components";

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    const { project } = await params;

    const PageContent = await getProjectMarkdown(project);

    return (
        <Page>
            <PageContent />
        </Page>
    );
}

async function getProjectMarkdown(project: string) {
    return dynamic(() => import(`../../markdown/projects/${project}.mdx`))
}
