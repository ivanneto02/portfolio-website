"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider, DarkModeContext } from "@/app/context";
import { useContext } from "react";

const geistSans = Geist({
        variable: "--font-geist-sans",
        subsets: ["latin"],
});

const geistMono = Geist_Mono({
        variable: "--font-geist-mono",
        subsets: ["latin"],
});

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {

        return (
                <DarkModeProvider>
                        <html lang="en">
                                <body
                                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                                >
                                        {children}
                                </body>
                        </html>
                </DarkModeProvider>
        );
}
