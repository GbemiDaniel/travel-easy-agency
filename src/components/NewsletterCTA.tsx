"use client";

import React from 'react';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import Button from './ui/Button';

export default function NewsletterCTA() {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1140px] mx-auto px-4 sm:px-6">

                {/* The Orange Banner */}
                <div className="relative w-full bg-brand-orange rounded-3xl md:rounded-[2rem] overflow-hidden flex flex-col items-center justify-center py-12 px-4 md:py-20 md:px-6 text-center shadow-2xl">

                    {/* --- THE CIRCLE SVG (Bottom Left) --- */}
                    {/* On ultra-small screens (<360px), we scale it down (w-32) 
              so it stays tucked in the corner and doesn't bleed into the text.
          */}
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 md:w-64 md:h-64 pointer-events-none opacity-40 md:opacity-50">
                        <Image
                            src="/cta-circles.svg"
                            alt="Decoration Circles"
                            fill
                            className="object-contain object-bottom-left"
                        />
                    </div>

                    {/* REUSED PALM TREE SVG (Top Right) */}
                    <div className="absolute -top-2 -right-2 md:top-0 md:right-8 w-24 h-24 md:w-32 md:h-32 pointer-events-none opacity-20 md:opacity-30">
                        <Image
                            src="/palm-tree.svg"
                            alt="Decoration Palms"
                            fill
                            className="object-contain object-top-right brightness-0 invert"
                        />
                    </div>

                    {/* Content */}
                    <h2 className="font-volkhov text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-8 md:mb-10 relative z-10">
                        Subscribe and get <br className="hidden md:block" />
                        exclusive deals & offer
                    </h2>

                    {/* Input Form */}
                    <form
                        className="relative z-20 flex flex-col sm:flex-row items-center bg-white rounded-2xl sm:rounded-xl p-2 w-full max-w-md shadow-lg gap-2 sm:gap-0"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex items-center w-full pl-2 sm:pl-4">
                            <FiMail className="w-5 h-5 text-gray-400 shrink-0" />
                            <input
                                type="email"
                                placeholder="Enter your mail"
                                className="flex-grow w-full px-3 py-2 text-heading-dark placeholder-gray-400 outline-none bg-transparent"
                                required
                            />
                        </div>

                        <Button variant="solid" className="w-full sm:w-auto px-6 py-3 text-sm rounded-xl sm:rounded-lg shadow-none shrink-0">
                            Subscribe
                        </Button>
                    </form>

                </div>
            </div>
        </section>
    );
}