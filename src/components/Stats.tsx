// src/components/Stats.tsx
import React from 'react';
import Image from 'next/image';

export default function Stats() {
    return (
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10 lg:pr-12">
            {/* Stat 1: Locations */}
            <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white overflow-hidden relative z-10 shadow-sm">
                        <Image src="/hero-bg.jpg" alt="Location 1" fill className="object-cover" />
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full border-[3px] border-white overflow-hidden relative z-0 shadow-sm">
                        <Image src="/hero-bg.jpg" alt="Location 2" fill className="object-cover" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-volkhov text-3xl md:text-[32px] text-heading-dark leading-tight">10,000+</span>
                    <span className="text-body-grey text-[15px]">Travel Locations</span>
                </div>
            </div>

            {/* Stat 2: Travelers */}
            <div className="flex flex-col items-center md:items-start">
                <span className="font-volkhov text-3xl md:text-[32px] text-heading-dark leading-tight">45,000+</span>
                <span className="text-body-grey text-[15px]">Satisfied Travelers</span>
            </div>

            {/* Stat 3: Support */}
            <div className="flex flex-col items-center md:items-start">
                <span className="font-volkhov text-3xl md:text-[32px] text-heading-dark leading-tight">24/7</span>
                <span className="text-body-grey text-[15px]">Customer Support</span>
            </div>
        </div>
    );
}