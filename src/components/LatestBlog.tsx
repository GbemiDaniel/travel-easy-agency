"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import BlogCard from './ui/BlogCard';

// 1. The Base Data (Exactly 4 items)
const BASE_BLOG_DATA = [
    { id: 1, imageSrc: '/blogs/greece.jpg', title: 'The Amazing Difference a Year of Travelling Creates', date: 'July 27, 2025' },
    { id: 2, imageSrc: '/blogs/rome.jpg', title: 'The Amazing Experience of The City of Rome.', date: 'July 27, 2025' },
    { id: 3, imageSrc: '/blogs/zanzibar.jpg', title: 'Welcome to the Blue Shores of Zanzibar', date: 'July 27, 2025' },
    { id: 4, imageSrc: '/blogs/osaka.jpg', title: "The Amazing Views of Osaka's Finest", date: 'July 27, 2025' },
];

// 2. The Duplicated Array for the Infinite Loop Illusion
const INFINITE_BLOG_DATA = [...BASE_BLOG_DATA, ...BASE_BLOG_DATA];

export default function LatestBlog() {
    // Determine if we are on mobile to change the display logic
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Framer Motion controls for the infinite scroll
    const controls = useAnimationControls();

    // Start the infinite loop ONLY on desktop (lg and up)
    useEffect(() => {
        if (!isMobile) {
            controls.start({
                x: ["0%", "-50%"], // Scroll halfway through the duplicated array
                transition: {
                    ease: "linear",
                    duration: 20, // Adjust this to speed up/slow down the scroll
                    repeat: Infinity,
                }
            });
        } else {
            // Stop animation and reset on mobile
            controls.stop();
            controls.set({ x: "0%" });
        }
    }, [isMobile, controls]);

    // For mobile manual sliding
    const [mobileIndex, setMobileIndex] = useState(0);

    return (
        <section className="w-full bg-white py-24 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-volkhov text-4xl md:text-5xl text-heading-dark">
                        Get update with <span className="text-brand-orange">latest blog</span>
                    </h2>
                </div>

                {/* The Carousel Viewport */}
                {/* On mobile, it's a standard flex container. On desktop, it's the masking wrapper for the infinite track. */}
                <div className="w-full relative">

                    {/* The Track Container */}
                    <motion.div
                        className={`flex gap-4 md:gap-6 ${isMobile ? "transition-transform duration-500 ease-out" : "w-[200%]"}`}
                        // On desktop, Framer Motion handles the 'x' loop via `controls`. 
                        // On mobile, we use standard CSS transform for manual sliding.
                        animate={controls}
                        style={isMobile ? { transform: `translateX(calc(-${mobileIndex * 100}% - ${mobileIndex * 16}px))` } : {}}
                        // Pause infinite scroll on hover (desktop only)
                        onHoverStart={() => !isMobile && controls.stop()}
                        onHoverEnd={() => !isMobile && controls.start({ x: ["0%", "-50%"], transition: { ease: "linear", duration: 20, repeat: Infinity } })}
                    >
                        {/* On Desktop: Render all 8 items (duplicated array) for the infinite loop.
                            On Mobile: Render only the original 4 items for manual sliding.
                        */}
                        {(isMobile ? BASE_BLOG_DATA : INFINITE_BLOG_DATA).map((blog, index) => (
                            <div
                                key={`${blog.id}-${index}`}
                                // Mobile: Takes up 100% of screen. Tablet: 50%. Desktop: Exact fraction of the 200% width track.
                                className={`flex-shrink-0 ${isMobile ? "w-full sm:w-[calc(50%-12px)]" : "w-[calc(100%/8-24px)]"}`}
                            >
                                <BlogCard
                                    imageSrc={blog.imageSrc}
                                    title={blog.title}
                                    date={blog.date}
                                />
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* Mobile Pagination Dots (Hidden on Desktop) */}
                {isMobile && (
                    <div className="flex justify-center items-center gap-3 mt-12">
                        {BASE_BLOG_DATA.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setMobileIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${mobileIndex === index ? 'bg-brand-orange scale-125' : 'bg-[#E5E5E5] hover:bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}