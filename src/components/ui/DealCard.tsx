// src/components/ui/DealCard.tsx
import React from 'react';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Button from './Button';
import styles from './DealCard.module.css';

interface DealCardProps {
    imageSrc: string;
    title: string;
    country: string;
    rating: number;
    duration: string;
    originalPrice: string;
    discountPrice: string;
}

export default function DealCard({
    imageSrc,
    title,
    country,
    rating,
    duration,
    originalPrice,
    discountPrice,
}: DealCardProps) {
    return (
        <div className={styles.card}>

            {/* Top Half: Image & Interactive Overlay */}
            <div className={styles.imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={styles.cardImage}
                />

                <div className={styles.overlay} />

                <div className={styles.bookButtonWrapper}>
                    <Button variant="solid" className="px-6 py-2.5 shadow-lg whitespace-nowrap">
                        Book Now
                    </Button>
                </div>
            </div>

            {/* Bottom Half: Content Layout */}
            <div className="p-6 flex flex-col bg-white">

                {/* Row 1: Title & Rating */}
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-[#222222] text-[1.15rem] leading-tight">{title}</h3>
                    <div className="flex items-center gap-1.5">
                        <FaStar className="text-[#FFC107] w-[14px] h-[14px]" />
                        <span className="text-[#666666] text-[13px] font-medium">{rating}</span>
                    </div>
                </div>

                {/* Row 2: Location */}
                <div className="flex items-center gap-1.5 mb-6">
                    <FiMapPin className="text-[#999999] w-4 h-4" />
                    <span className="text-[#999999] text-[14px]">{country}</span>
                </div>

                {/* Row 3: Footer Stats (The 3 distinct columns) */}
                <div className="flex items-start justify-between pt-1">
                    {/* Duration Column */}
                    <div className="flex flex-col">
                        <span className="font-semibold text-[#222222] text-[15px]">{duration}</span>
                        <span className={styles.labelFaint}>duration</span>
                    </div>

                    {/* Original Price Column */}
                    <div className="flex flex-col items-center">
                        <span className={styles.priceStrike}>{originalPrice}</span>
                        <span className={styles.labelFaint}>price</span>
                    </div>

                    {/* Discount Price Column (Dark black text, unlike previous version) */}
                    <div className="flex flex-col items-end">
                        <span className="font-bold text-[#222222] text-lg">{discountPrice}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}