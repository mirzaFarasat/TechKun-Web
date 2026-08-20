'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import techkunLogo from '@/app/icon.svg';

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

export default function ComingSoon() {
    const year = new Date().getFullYear();

    return (<>
        {/* Ambient glow wash */}
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
                className="absolute"
                style={{
                    inset: "0",
                    background:
                        'radial-gradient(ellipse var(--page-max-width) 100% at calc(50% - var(--page-max-width) / 2) 125%, var(--primary-500), transparent)',
                    filter: "blur(8px)",
                    opacity: 0.3
                }}
                animate={{ opacity: [0.3, 0.15, 0.15, 0.15, 0.15, 0.3] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute"
                style={{
                    inset: "0",
                    background:
                        'radial-gradient(ellipse var(--page-max-width) 100% at 50% 125%, var(--secondary-500), transparent)',
                    filter: "blur(8px)",
                    opacity: 0.15
                }}
                animate={{ opacity: [0.15, 0.3, 0.3, 0.15, 0.15, 0.15] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute"
                style={{
                    inset: "0",
                    background:
                        'radial-gradient(ellipse var(--page-max-width) 100% at calc(50% + var(--page-max-width) / 2) 125%, var(--tertiary-500), transparent)',
                    filter: "blur(8px)",
                    opacity: 0.15
                }}
                animate={{ opacity: [0.15, 0.15, 0.15, 0.3, 0.3, 0.15] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>

        {/* Rising particles */}
        <div className="absolute inset-0 pointer-events-none">
            {PARTICLES.map((p, i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full bg-white/40"
                    style={{ left: p.left, bottom: '-2%', width: p.size, height: p.size }}
                    animate={{ y: ['0vh', '-105vh'], opacity: [0, 0.6, 0] }}
                    transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
                />
            ))}
        </div>

        {/* Main content */}
        <main>
            <section>

                <div className="flex flex-col px-6 py-24">
                    <motion.p
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 display-text flex items-center gap-4"
                    >
                        <Image src={techkunLogo} alt="TechKun" style={{ width: "1lh" }} priority />
                        <span>TechKun</span>
                    </motion.p>

                    <p className="text-base" style={{
                        marginBlockEnd: "0.5em",
                        fontWeight: "500",
                        color: "var(--secondary-neutral-400)"
                    }}>Hello there!</p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-3xl font-bold tracking-tight leading-[1.15]"
                        style={{ textWrap: 'balance', marginBlockEnd: "0.5em" }}
                    >
                        We have been working on a redesign, and it&apos;s just around the&nbsp;corner.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base mb-10"
                        style={{
                            fontWeight: "500",
                            textWrap: "pretty",
                            color: "var(--secondary-neutral-400)"
                        }}
                    >
                        We build software with beauty, precision, and identity. And we&apos;ve tried to bring those
                        same values into our redesign. Be sure to check back soon and be among the first to
                        experience it.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="text-sm tracking-widest font-bold uppercase mb-4"
                        style={{
                            color: "var(--secondary-neutral-600)"
                        }}
                    >
                        In the meantime, you can find us at:
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mb-10 flex items-center gap-4"
                    >
                        <motion.a
                            href="https://www.linkedin.com/company/techkunex/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TechKun on LinkedIn"
                            className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm hover:opacity-80 transition-colors duration-300"
                            style={{backgroundColor: "var(--secondary-neutral-800)"}}
                        >
                            <FaLinkedinIn size={16} />
                        </motion.a>
                        <motion.a
                            href="https://x.com/TechKun_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TechKun on X"
                            className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm hover:opacity-80 transition-colors duration-300"
                            style={{backgroundColor: "var(--secondary-neutral-800)"}}
                        >
                            <FaXTwitter size={15} />
                        </motion.a>
                        <motion.a
                            href="mailto:farasat@tech-kun.com"
                            aria-label="Email TechKun"
                            className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm hover:opacity-80 transition-colors duration-300"
                            style={{backgroundColor: "var(--secondary-neutral-800)"}}
                        >
                            <HiOutlineMail size={18} />
                        </motion.a>
                    </motion.div>

                    {/* Indeterminate progress bar */}
                    {/*<motion.div*/}
                    {/*    initial={{ opacity: 0 }}*/}
                    {/*    animate={{ opacity: 1 }}*/}
                    {/*    transition={{ duration: 0.6, delay: 0.6 }}*/}
                    {/*    className="w-full max-w-xs"*/}
                    {/*>*/}
                    {/*    <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden">*/}
                    {/*        <motion.div*/}
                    {/*            className="absolute top-0 h-full w-1/3 rounded-full bg-gradient-to-r from-primary-300 via-white to-primary-300"*/}
                    {/*            animate={{ left: ['-40%', '100%'] }}*/}
                    {/*            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <p className="mt-3 text-[14px] tracking-widest text-gray-500">Brewing a fresh look...</p>*/}
                    {/*</motion.div>*/}
                </div>
            </section>
        </main>

        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="relative text-center text-xs text-gray-500 pb-6"
        >
            <p>© {year} TechKun. All rights reserved.</p>
        </motion.footer>
    </>);
}
