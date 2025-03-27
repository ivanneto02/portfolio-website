"use client"

import React from "react";
import hljs from "highlight.js";

import "highlight.js/styles/github-dark.css";

export function CodeBlock({ children, className }) {
        // Extract the language from className (e.g., language-js)
        const language = className?.replace("language-", "") || "plaintext";

        // Highlight code using Highlight.js
        const highlightedCode = hljs.highlight(children, {
                language: hljs.getLanguage(language) ? language : "plaintext",
        }).value;

        return (
                <pre className={`hljs language-${language}`}>
                        <code
                                className={className}
                        >{children}</code>
                                                </pre>);}
	
