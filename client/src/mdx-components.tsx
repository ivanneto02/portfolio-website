import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from "@/app/components";


export function useMDXComponents(components: MDXComponents): MDXComponents {
        return {
                ...components,
                pre: ({ children }) => <>{children}</>,
                code: ({ children, className, ...props }) => {
                        <CodeBlock className={className} {...props}>

                        </CodeBlock>
                }
        }
}

