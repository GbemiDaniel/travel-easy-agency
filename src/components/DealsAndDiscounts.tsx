// src/components/DealsAndDiscounts.tsx
import React from 'react';
import DealCard from './ui/DealCard';

export default function DealsAndDiscounts() {
    const deals = [
        {
            id: 1,
            imageSrc: '/deals/mallorca.jpg', // Using your new local files
            title: 'Mallorca',
            country: 'Spain',
            rating: 4.9,
            duration: '14 Days',
            originalPrice: '$950',
            discountPrice: '$850',
        },
        {
            id: 2,
            imageSrc: '/deals/taj-mahal.jpg',
            title: 'Taj Mahal',
            country: 'India',
            rating: 4.9,
            duration: '14 Days',
            originalPrice: '$950',
            discountPrice: '$850',
        },
        {
            id: 3,
            imageSrc: '/deals/osaka.jpg',
            title: 'Osaka',
            country: 'Japan',
            rating: 4.9,
            duration: '14 Days',
            originalPrice: '$950',
            discountPrice: '$850',
        },
        {
            id: 4,
            imageSrc: '/deals/tokyo.jpg',
            title: 'Tokyo',
            country: 'Japan',
            rating: 4.9,
            duration: '14 Days',
            originalPrice: '$950',
            discountPrice: '$850',
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-[1140px] mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-volkhov text-4xl text-heading-dark mb-4">
                        Exclusive <span className="text-brand-orange">deals & discounts</span>
                    </h2>
                    <p className="text-body-grey max-w-md text-[15px] leading-relaxed">
                        Discover our fantastic early booking discounts & start planning your journey.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deals.map((deal) => (
                        <DealCard
                            key={deal.id}
                            imageSrc={deal.imageSrc}
                            title={deal.title}
                            country={deal.country}
                            rating={deal.rating}
                            duration={deal.duration}
                            originalPrice={deal.originalPrice}
                            discountPrice={deal.discountPrice}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}