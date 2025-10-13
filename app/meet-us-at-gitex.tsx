import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function MeetUsAtGitex() {
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        setShowToast(true);
    }, []);

    return (
        showToast && (
            <div className="fixed top-4 right-4 z-50 max-w-4xl w-11/12 md:w-auto animate-slide-in">
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setShowToast(false)}
                        className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors z-10 bg-white rounded-full p-1"
                        aria-label="Close notification"
                    >
                        <X />
                    </button>

                    <div className="flex flex-col md:flex-row">
                        {/* Left Side - Content */}
                        <div className="w-full md:w-1/2 p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Us at GITEX Global Dubai!
                            </h2>
                            <p className="text-gray-600 mb-8 text-sm md:text-base">
                                We'll be attending <b>GITEX Global Dubai</b> this year!
                                If you're into tech, innovation, or startups, let's connect and share ideas.
                                Don't miss this chance to meet in person — it's going to be an amazing experience!
                            </p>
                            <button className="text-primary-700 w-full py-3 px-6 rounded-lg bg-primary-700 text-white transition duration-300 transform hover:scale-105 font-semibold">
                                <Link href="/contact-us">
                                    Contact Us
                                </Link>
                            </button>
                        </div>

                        {/* Right Side - Image */}
                        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 flex items-center justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="relative toast-float">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3">
                                        <div className="flex items-center justify-center mb-4">
                                            <Image src="/GITEX_GLOBAL_2025.png" alt="GITEX Global 2025" />
                                        </div>
                                    </div>
                                    {/* Decorative stars */}
                                    <div className="absolute -top-4 -right-4 text-4xl toast-pulse">✨</div>
                                    <div className="absolute -bottom-4 -left-4 text-3xl toast-pulse toast-delay">✨</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};