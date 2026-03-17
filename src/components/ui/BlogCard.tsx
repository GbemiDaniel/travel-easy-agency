// src/components/ui/BlogCard.tsx
import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    date: string;
}

export default function BlogCard({ imageSrc, title, date }: BlogCardProps) {
    return (
        <div className="flex flex-col bg-white overflow-hidden cursor-pointer group h-full">
            {/* Taller Image Wrapper with rounded corners */}
            <div className="relative w-full h-[260px] overflow-hidden rounded-2xl mb-4">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow pr-2">
                <h3 className="font-bold text-heading-dark text-[16px] leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    {title}
                </h3>
                <span className="text-[#999999] text-[14px] mt-auto font-medium">
                    {date}
                </span>
            </div>
        </div>
    );
}