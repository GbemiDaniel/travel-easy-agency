"use client";

// src/components/Hero.tsx
import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import Button from './ui/Button';
import Stats from './Stats';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        // Reduced top padding (pt-2 lg:pt-6) to account for the new Navbar height
        <section className="w-full max-w-[1140px] mx-auto px-6 pt-2 lg:pt-6 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 items-center">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start lg:pr-4">
                    <h1 className={`${styles.heroTitle} font-volkhov text-heading-dark mb-6`}>
                        <span className="whitespace-nowrap">Get started on your</span> <br className="hidden md:block" />
                        <span className="whitespace-nowrap">exciting <span className="text-brand-orange">journey</span></span> <br className="hidden md:block" />
                        with us.
                    </h1>
                    <p className={`${styles.heroSubtitle} text-body-grey mb-10 max-w-lg`}>
                        A Team of experienced tourism professionals will <br className="hidden md:block" />
                        provide you with the best advice and tips for your <br className="hidden md:block" />
                        desire place.
                    </p>
                    <Button variant="outline" className="w-fit mt-2">
                        Discover Now
                    </Button>
                </div>

                {/* Right Column: Circular Image & Floating Cards */}
                <div className="relative w-full py-8 mt-8 lg:mt-0 flex justify-center">

                    {/* The Dotted Flight Path Vector */}
                    {/* Scaled down and aligned to the top-right so it arcs upwards correctly */}
                    <div className="absolute top-[-5%] right-[-5%] w-[100%] h-[100%] z-0 pointer-events-none opacity-40">
                        <Image
                            src="/dotted-flight-path.svg"
                            alt="Flight path decoration"
                            fill
                            className="object-contain object-top-right"
                        />
                    </div>

                    <div className={`relative z-10 ${styles.imageContainer}`}>

                        <div className={styles.circleMask}>
                            <Image
                                src="/hero-bg.jpg"
                                alt="Beautiful beach destination"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Card 1: Best Tour Awards (Top Left) */}
                        <motion.div
                            className={`${styles.floatingCard} ${styles.cardTopLeft} scale-85 sm:scale-100 origin-top-left`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="bg-[#FFF1EB] p-2 rounded-md flex items-center justify-center">
                                {/* Use your SVG trophy here */}
                                <span className="text-lg">🏆</span>
                            </div>
                            <div className="flex flex-col ml-3 text-left">
                                <span className="text-body-grey text-[10px] sm:text-[11px] leading-tight font-medium">Best Tour</span>
                                <span className="text-heading-dark font-bold text-[13px] sm:text-[14px] leading-tight mt-0.5">Awards</span>
                            </div>
                        </motion.div>

                        {/* Card 2: Explore (Middle Right) */}
                        <motion.div
                            className={`${styles.floatingCard} ${styles.cardTopRight} scale-85 sm:scale-100 origin-right lg:origin-bottom-left`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <div className="bg-[#E8F8F5] p-2 rounded-md flex items-center justify-center">
                                {/* Use your SVG map pin here */}
                                <span className="text-lg">📍</span>
                            </div>
                            <div className="flex flex-col ml-3 text-left">
                                <span className="text-heading-dark font-bold text-[13px] sm:text-[14px] leading-tight">Explore</span>
                                <span className="text-body-grey text-[9px] sm:text-[10px] leading-tight mt-1">Every corner of<br />the world with us</span>
                            </div>
                        </motion.div>

                        {/* Card 3: 27K Customer Reviewed (Bottom Left) */}
                        <motion.div
                            className={`${styles.floatingCard} ${styles.cardBottomLeft} scale-85 sm:scale-100 origin-bottom-left`}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        >
                            <div className="bg-white drop-shadow-sm p-1.5 rounded-md flex items-center justify-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>
                            <div className="flex flex-col ml-3 text-left">
                                <span className="text-heading-dark font-bold text-[13px] sm:text-[14px] leading-tight">27K</span>
                                <span className="text-body-grey text-[10px] sm:text-[11px] font-medium leading-tight mt-0.5">Customer Reviewed</span>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>

            {/* The isolated Stats component stays perfectly intact */}
            <Stats />
        </section>
    );
}