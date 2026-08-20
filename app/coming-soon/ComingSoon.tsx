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

        {/* Main content */}
        <main>
            <section>
                <div className="relative flex flex-col items-center justify-center text-center px-6 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative mb-8 flex items-center justify-center"
                    >
                        <Image src={techkunLogo} alt="TechKun" className="relative w-11 h-11 md:w-14 md:h-14" priority />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-5"
                        style={{ textWrap: 'balance' }}
                    >
                        Hello there!<br/>We have been working on a redesign, and it&apos;s just around the&nbsp;corner.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="max-w-xl text-sm md:text-base text-gray-400 mb-10"
                    >
                        We build software with beauty, precision, and identity. And we&apos;ve tried to bring those
                        same values into our redesign. Be sure to check back soon and be among the first to
                        experience it.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="text-[11px] tracking-widest uppercase text-gray-500 mb-4"
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

                    {/* Indeterminate progress bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-full max-w-xs"
                    >
                        <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                                className="absolute top-0 h-full w-1/3 rounded-full bg-gradient-to-r from-primary-300 via-white to-primary-300"
                                animate={{ left: ['-40%', '100%'] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                        <p className="mt-3 text-[14px] tracking-widest text-gray-500">Brewing a fresh look...</p>
                    </motion.div>
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
