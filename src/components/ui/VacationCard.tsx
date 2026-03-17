// src/components/ui/VacationCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi'; // Paper airplane-ish icon
import Button from './Button';

interface VacationCardProps {
    imageSrc: string;
    location: string;
    price: string;
    duration: string;
    rating: number;
}

export default function VacationCard({
    imageSrc,
    location,
    price,
    duration,
    rating,
}: VacationCardProps) {
    return (
        <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden flex flex-col border border-gray-50 cursor-pointer">

            {/* Top Half: Taller Image & Hover Overlay */}
            <div className="relative h-[340px] w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={location}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 z-10" />

                {/* Book Now Button */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out translate-y-4 group-hover:translate-y-0 z-20">
                    <Button variant="solid" className="px-8 py-2.5 shadow-xl whitespace-nowrap">
                        Book Now
                    </Button>
                </div>
            </div>

            {/* Bottom Half: Content Data */}
            <div className="p-6 flex flex-col bg-white z-30">

                {/* Row 1: Location & Price */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-heading-dark text-[1.35rem]">{location}</h3>
                    <span className="font-bold text-brand-orange text-xl">{price}</span>
                </div>

                {/* Row 2: Duration & Rating */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FiNavigation className="text-brand-orange w-[18px] h-[18px] transform rotate-45" />
                        <span className="text-[#666666] font-medium text-[15px]">{duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaStar className="text-[#FFC107] w-[16px] h-[16px]" />
                        <span className="text-[#666666] text-[15px] font-medium">{rating}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}