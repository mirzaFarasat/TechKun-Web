'use client';

import Image from 'next/image';
import {motion} from 'motion/react';
import techkunLogo from '@/app/icon.svg';
import Link from "next/link";
import EmailLink from "@/app/components/EmailLink";
import {LINKEDIN_LOGO_PATH_HREF, X_LOGO_PATH_HREF} from "@/app/Shared";
import React from "react";

const PARTICLES = [
    { left: '6%', size: 3, duration: 14, delay: 0 },
    { left: '14%', size: 2, duration: 11, delay: 2 },
    { left: '23%', size: 4, duration: 16, delay: 1 },
    { left: '32%', size: 2, duration: 10, delay: 4 },
    { left: '41%', size: 3, duration: 13, delay: 0.5 },
    { left: '52%', size: 2, duration: 12, delay: 3 },
    { left: '61%', size: 4, duration: 17, delay: 1.5 },
    { left: '70%', size: 3, duration: 11, delay: 2.5 },
    { left: '79%', size: 2, duration: 15, delay: 0 },
    { left: '88%', size: 3, duration: 12, delay: 3.5 },
    { left: '95%', size: 2, duration: 14, delay: 1 },
];

const links = [{
    iconJSX: <svg height="1.25em" viewBox="0 0 24 24">
        <defs>
            <linearGradient id="linkedin-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="var(--gradient-color-1)" />
                <stop offset="80%" stopColor="var(--gradient-color-2)" />
            </linearGradient>
        </defs>
        <use href={LINKEDIN_LOGO_PATH_HREF} fill="url(#linkedin-gradient)" />
    </svg>,
    link: "https://www.linkedin.com/company/techkunex/"
}, {
    iconJSX: <svg height="1.25em" viewBox="0 0 24 24">
        <defs>
            <linearGradient id="x-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="var(--gradient-color-1)" />
                <stop offset="80%" stopColor="var(--gradient-color-2)" />
            </linearGradient>
        </defs>
        <use href={X_LOGO_PATH_HREF} fill="url(#x-gradient)" />
    </svg>,
    link: "https://x.com/TechKun_"
}];
const BG_GRADIENT_HIGHER_OPACITY = 0.75;
const BG_GRADIENT_LOWER_OPACITY = 0.25;
export default function ComingSoon() {
    const year = new Date().getFullYear();

    // useEffect(() => {
    //     const VISIBILITY_DURATION = 3;
    //     const OPACITY_CHANGE_DURATION = 3;
    //     const ONE_ROUND = VISIBILITY_DURATION + OPACITY_CHANGE_DURATION;
    //     const container = document.querySelector('.background-gradients');
    //     if (!container) return;
    //     const gradientElements = container.querySelectorAll(".gradient-element.animated");
    //     const TOTAL_DURATION = gradientElements.length * ONE_ROUND - VISIBILITY_DURATION;
    //     gradientElements.forEach((element, i) => {
    //         if (i === 0) {
    //             element.animate({
    //                 opacity: [BG_GRADIENT_HIGHER_OPACITY, BG_GRADIENT_LOWER_OPACITY, BG_GRADIENT_LOWER_OPACITY, BG_GRADIENT_HIGHER_OPACITY],
    //                 offset: [0, OPACITY_CHANGE_DURATION, TOTAL_DURATION - OPACITY_CHANGE_DURATION, TOTAL_DURATION].map(v => v / TOTAL_DURATION),
    //                 easing: ["ease-in-out", "linear", "ease-in-out"]
    //             }, {
    //                 duration: TOTAL_DURATION * 1000,
    //                 delay: VISIBILITY_DURATION * 1000,
    //                 fill: "both",
    //                 iterations: Infinity
    //             });
    //             return;
    //         }
    //         const DURATION_BEFORE = (i - 1) * ONE_ROUND;
    //         element.animate({
    //             opacity: [BG_GRADIENT_LOWER_OPACITY, BG_GRADIENT_HIGHER_OPACITY, BG_GRADIENT_HIGHER_OPACITY, BG_GRADIENT_LOWER_OPACITY],
    //             offset: [DURATION_BEFORE, DURATION_BEFORE + OPACITY_CHANGE_DURATION, i * ONE_ROUND, i * ONE_ROUND + OPACITY_CHANGE_DURATION].map(v => v / TOTAL_DURATION),
    //             easing: ["ease-in-out", "linear", "ease-in-out"]
    //         }, {
    //             duration: TOTAL_DURATION * 1000,
    //             delay: VISIBILITY_DURATION * 1000,
    //             fill: "both",
    //             iterations: Infinity
    //         });
    //     });
    // }, []);

    return (<>
        <style jsx>{`
            @keyframes waving-opacity {
                0%, 25%, 75%, 100% { opacity: ${BG_GRADIENT_LOWER_OPACITY}; }
                50% { opacity: ${BG_GRADIENT_HIGHER_OPACITY}; }
            }
            .background-gradients {
                --gradient-size: calc(100vw / 2);
                --gradient-position-x: 50%;
                --gradient-position-y: calc(100% + var(--gradient-size) * 0.6);
                pointer-events: none;
                z-index: -1;
                isolation: isolate;
                &, & .gradient-element {
                    position: absolute;
                    inset: 0;
                }
                .gradient-element {
                    z-index: 0;
                    animation: waving-opacity 6s calc(var(--i) * 0.5s) infinite ease-in-out both;
                    background: radial-gradient(
                        circle var(--gradient-size) at var(--gradient-position-x) var(--gradient-position-y) in oklch,
                        var(--gradient-color),
                        transparent
                    );
                }
                .gradient-element[data-index="0"] {
                    --gradient-position-x: calc(50% - 50vw);
                    --gradient-color: var(--primary-500);
                }
                .gradient-element[data-index="1"] {
                    --gradient-color: var(--secondary-500);
                }
                .gradient-element[data-index="2"] {
                    --gradient-position-x: calc(50% + 50vw);
                    --gradient-color: var(--tertiary-500);
                }
                &::before, &::after {
                    content: "";
                    position: absolute;
                    inset: auto 0 0 0;
                    height: var(--gradient-size);
                    z-index: 1;
                }
                &::before {
                    backdrop-filter: blur(8px);
                    mask: linear-gradient(
                        to bottom,
                        white,
                        transparent 90%
                    );
                }
                &::after {
                    backdrop-filter: blur(64px);
                    mask: linear-gradient(
                        to bottom,
                        transparent,
                        white 90%
                    );
                }
            }
        `}</style>
        {/* Ambient glow wash */}
        <div className="background-gradients">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    style={{ '--i': i } as React.CSSProperties}
                    className={"gradient-element animated"}
                    data-index={i}
                />
            ))}
        </div>

        {/* Rising particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-1">
            {PARTICLES.map((p, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{ left: p.left, bottom: '-2%', width: p.size, height: p.size, backgroundColor: "var(--secondary-neutral-400)" }}
                    animate={{ y: ['0vh', '-105vh'], opacity: [0, 0.6, 0] }}
                    transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
                />
            ))}
        </div>

        {/* Main content */}
        <main className="z-0">
            <section className="slide-in-children" style={{ paddingBlock: "64px clamp(8rem, 20vw, 10rem)" }}>
                <div>
                    <p
                        className="slide-down display-text flex items-center gap-4"
                        style={{ marginBlockEnd: "5rem", '--i': 0 } as React.CSSProperties}
                    >
                        <Image src={techkunLogo} alt="TechKun" style={{ width: "1lh" }} priority />
                        <span>TechKun</span>
                    </p>

                    <p className="text-lg" style={{
                        marginBlockEnd: "0.5em",
                        fontWeight: "500",
                        color: "var(--secondary-neutral-500)"
                    }}>Hello there!</p>
                    <h1
                        className="slide-up text-3xl font-bold tracking-tight leading-[1.15]"
                        style={{ '--i': 1, textWrap: 'pretty', marginBlockEnd: "0.375em", color: "var(--secondary-neutral-100)" } as React.CSSProperties}
                    >
                        Our New Website is <span style={{color: "var(--secondary-neutral-50)"}}>Coming Soon.</span>
                    </h1>

                    <p
                        className="slide-up text-lg"
                        style={{
                            '--i': 2,
                            fontWeight: "500",
                            textWrap: "pretty",
                            color: "var(--secondary-neutral-500)",
                            marginBlockEnd: "3rem"
                        } as React.CSSProperties}
                    >
                        We've been working on a redesign and it's just around the corner. Be sure to check back soon and be among the first to
                        experience it.
                    </p>
                </div>
                <div>
                    <div className="slide-up" style={{
                        '--i': 3,
                        padding: "clamp(1.5rem, 5vw, 2rem)",
                        border: "1px solid var(--secondary-neutral-700)",
                        borderRadius: "1rem",
                        // backgroundColor: "oklch(from var(--secondary-neutral-900) l c h / 0.375)",
                        // marginBlockEnd: "3rem"
                    } as React.CSSProperties}>
                        <p
                            className="text-base tracking-widest font-bold uppercase"
                            style={{
                                marginBlockEnd: "1.2rem",
                                textWrap: "pretty",
                                color: "var(--secondary-neutral-400)"
                            }}
                        >
                            In the meantime, you can find us at:
                        </p>
                        <div
                            className="contact-options text-lg" style={{
                            color: "var(--secondary-neutral-100)",
                        }}
                        >
                            <EmailLink
                                style={{ whiteSpace: "nowrap", color: "inherit" }}
                                address="farasat@tech-kun.com" text="farasat@tech-kun.com"
                                iconSize="1.125em" iconStrokeWidth="1.4"
                            />
                            <div className="links">
                                {links.map(item => <Link
                                    className="link"
                                    key={item.link} href={item.link}
                                    target="_blank" rel="noopener noreferrer"
                                >{item.iconJSX}</Link>)}
                            </div>
                        </div>
                    </div>
                    {/*<p*/}
                    {/*    className="slide-up text-base tracking-widest font-bold uppercase"*/}
                    {/*    style={{*/}
                    {/*        '--i': 4,*/}
                    {/*        marginBlockEnd: "1.2rem",*/}
                    {/*        textWrap: "pretty",*/}
                    {/*        color: "var(--secondary-neutral-400)"*/}
                    {/*    } as React.CSSProperties}*/}
                    {/*>*/}
                    {/*    Or read about us here:*/}
                    {/*</p>*/}
                    {/*<p*/}
                    {/*    className="slide-up text-lg"*/}
                    {/*    style={{*/}
                    {/*        '--i': 4,*/}
                    {/*        fontWeight: "500",*/}
                    {/*        textWrap: "pretty",*/}
                    {/*        color: "var(--secondary-neutral-500)",*/}
                    {/*        marginBlockEnd: "0",*/}
                    {/*    } as React.CSSProperties}*/}
                    {/*>*/}
                    {/*    We build software with beauty, precision, and identity. And we&apos;ve tried to bring those*/}
                    {/*    same values into our redesign. Be sure to check back soon and be among the first to*/}
                    {/*    experience it.*/}
                    {/*</p>*/}
                </div>
            </section>
        </main>

        <footer
            className="text-base z-0 fade-in"
            style={{ color: "var(--secondary-neutral-400)", marginBlockEnd: "1.5rem" }}
        >
            <p suppressHydrationWarning>© {year} TechKun. All rights reserved.</p>
        </footer>
    </>);
}
