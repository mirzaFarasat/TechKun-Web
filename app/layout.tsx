import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import ComingSoon from './coming-soon/ComingSoon';
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "TechKun — Coming Soon",
    description: "TechKun's new website is launching soon. We're building something great.",
};

export default function RootLayout() {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ComingSoon />
            </body>
        </html>
    );
}
