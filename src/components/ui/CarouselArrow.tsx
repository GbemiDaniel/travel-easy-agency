// src/components/ui/CarouselArrow.tsx
import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface CarouselArrowProps {
    direction: 'left' | 'right';
    onClick?: () => void;
}

export default function CarouselArrow({ direction, onClick }: CarouselArrowProps) {
    return (
        <button
            onClick={onClick}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 bg-white transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:shadow-[0_10px_20px_rgba(250,116,54,0.3)] hover:-translate-y-0.5 group"
        >
            {direction === 'left' ? (
                <FiArrowLeft className="w-5 h-5 transition-colors group-hover:text-white" />
            ) : (
                <FiArrowRight className="w-5 h-5 transition-colors group-hover:text-white" />
            )}
        </button>
    );
}