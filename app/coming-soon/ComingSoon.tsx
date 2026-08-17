'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import techkunLogo from '@/public/Images/icon.png';

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

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col">
            {/* Ambient glow wash */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse 70% 60% at 0% 100%, rgba(37,99,235,0.30), transparent 70%)',
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(ellipse 70% 60% at 100% 100%, rgba(147,51,234,0.30), transparent 70%)',
                    }}
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Rising particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

            {/* Faint grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Main content */}
            <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative w-20 h-20 md:w-24 md:h-24 mb-8 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center"
                >
                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary-400/40 blur-xl"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <Image src={techkunLogo} alt="TechKun" className="relative w-11 h-11 md:w-14 md:h-14" priority />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.25em] uppercase text-primary-200 mb-5 px-4 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    New site under construction
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5"
                >
                    We&apos;re building
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 via-white to-indigo-200">
                        something great
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-xl text-sm md:text-base text-gray-400 mb-10"
                >
                    TechKun is getting a fresh look. We&apos;re polishing every pixel to bring you a faster,
                    sharper experience — launching very soon.
                </motion.p>

                {/* Indeterminate progress bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-xs mb-10"
                >
                    <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full w-1/3 rounded-full bg-gradient-to-r from-primary-300 via-white to-primary-300"
                            animate={{ x: ['-100%', '260%'] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </div>
                    <p className="mt-3 text-[11px] tracking-widest uppercase text-gray-500">Crafting the experience</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex items-center gap-4"
                >
                    <motion.a
                        href="https://www.linkedin.com/company/techkunex/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TechKun on LinkedIn"
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary-500 transition-colors duration-300 ring-1 ring-white/10"
                    >
                        <FaLinkedinIn size={16} />
                    </motion.a>
                    <motion.a
                        href="https://x.com/TechKun_"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TechKun on X"
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary-500 transition-colors duration-300 ring-1 ring-white/10"
                    >
                        <FaXTwitter size={15} />
                    </motion.a>
                    <motion.a
                        href="mailto:farasat@tech-kun.com"
                        aria-label="Email TechKun"
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary-500 transition-colors duration-300 ring-1 ring-white/10"
                    >
                        <HiOutlineMail size={18} />
                    </motion.a>
                </motion.div>
            </main>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative text-center text-xs text-gray-500 pb-6"
            >
                © {year} TechKun. All rights reserved.
            </motion.footer>
        </div>
    );
}
