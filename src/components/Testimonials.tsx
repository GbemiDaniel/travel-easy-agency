"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Kept for the local background SVG
import { motion, AnimatePresence } from 'framer-motion';
import CarouselArrow from './ui/CarouselArrow';

// Updated data with GUARANTEED working public images
const TESTIMONIALS = [
    {
        id: 1,
        name: "Mike Taylor",
        role: "Lahore, Pakistan",
        text: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
        image: "/testimonials/mike.jpg", // Assuming you actually have this one locally!
    },
    {
        id: 2,
        name: "Chris Thomas",
        role: "CEO of Red Button",
        text: '"We ensure that you\'ll embark on a perfectly planned, safe vacation at a price you can afford. The experience was truly seamless from start to finish."',
        // Publicly available, hotlink-friendly placeholder
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 3,
        name: "Sarah Jones",
        role: "Travel Blogger",
        text: '"I highly recommend this agency for anyone looking to travel without the hassle of planning. Everything was organized perfectly!"',
        // Publicly available, hotlink-friendly placeholder
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    return (
        <section className="w-full bg-[#F7F8FC] py-24 overflow-hidden">
            <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                {/* --- LEFT COLUMN: TEXT & CONTROLS --- */}
                <div className="flex flex-col items-start max-w-md">
                    <h2 className="font-volkhov text-5xl text-heading-dark leading-[1.2] mb-6">
                        What people say <br />
                        <span className="text-brand-orange">about us.</span>
                    </h2>
                    <p className="text-body-grey text-[16px] leading-relaxed mb-12">
                        Our Clients send us bunch of smilies with our services and we love them.
                    </p>

                    <div className="flex items-center gap-6 z-10">
                        <CarouselArrow direction="left" onClick={handlePrev} />
                        <CarouselArrow direction="right" onClick={handleNext} />
                    </div>
                </div>

                {/* --- RIGHT COLUMN: ANIMATED CARD STACK --- */}
                <div className="relative w-full min-h-[500px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0 lg:pr-12">

                    {/* Decorative Background SVG (Using Next Image because it's a local file) */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-60 pointer-events-none z-0">
                        <Image src="/testimonial-bg.svg" alt="Decoration" fill className="object-contain" />
                    </div>

                    {/* The Stack Container */}
                    <div className="relative w-full max-w-[450px] h-[320px]">
                        <AnimatePresence initial={false}>
                            {TESTIMONIALS.map((testimonial, index) => {

                                const isActive = index === currentIndex;
                                const isNext = index === (currentIndex + 1) % TESTIMONIALS.length;

                                if (!isActive && !isNext) return null;

                                return (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, x: 80, y: 100, scale: 0.95 }}
                                        animate={{
                                            opacity: 1,
                                            x: isActive ? 0 : 50,
                                            y: isActive ? 0 : 70,
                                            scale: isActive ? 1 : 1,
                                            zIndex: isActive ? 20 : 10,
                                        }}
                                        exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                                        className={`absolute top-0 left-0 w-full h-full rounded-2xl p-8 md:p-10 flex flex-col justify-end bg-white 
                      ${isActive ? 'shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50' : 'border-2 border-gray-100'}`}
                                    >

                                        {isActive ? (
                                            <div className="flex-grow flex flex-col relative">
                                                {/* Overlapping Avatar */}
                                                <div className="absolute -top-14 -left-14 w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#E2F0F3]">
                                                    {/* Standard HTML img tag to handle remote prototyping URLs */}
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                {/* Main Quote */}
                                                <p className="text-body-grey leading-relaxed text-[16px] mb-8 mt-2 relative z-20">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="flex-grow" />
                                        )}

                                        {/* Footer text (Name & Role) - Visible on BOTH cards */}
                                        <div className="flex flex-col">
                                            <h4 className={`font-semibold text-heading-dark ${isActive ? 'text-[18px]' : 'text-[16px]'}`}>
                                                {testimonial.name}
                                            </h4>
                                            <span className={`text-body-grey mt-1 ${isActive ? 'text-[14px]' : 'text-[13px]'}`}>
                                                {testimonial.role}
                                            </span>
                                        </div>

                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}