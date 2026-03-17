// src/components/VacationPlan.tsx
import React from 'react';
import Image from 'next/image';
import VacationCard from './ui/VacationCard';

export default function VacationPlan() {
    const plans = [
        {
            id: 1,
            imageSrc: '/vacations/venice.jpg', // Update with your actual image paths
            location: 'Venice, Italy',
            price: '$5400',
            duration: '10 Days Trip',
            rating: 4.8,
        },
        {
            id: 2,
            imageSrc: '/vacations/napoli.jpg',
            location: 'Napoli, Italy',
            price: '$5400',
            duration: '10 Days Trip',
            rating: 4.8,
        },
        {
            id: 3,
            imageSrc: '/vacations/rome.jpg',
            location: 'Rome, Italy',
            price: '$5400',
            duration: '10 Days Trip',
            rating: 4.8,
        },
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-[1140px] mx-auto px-6">

                {/* Header with Palm Trees */}
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Increased gap from gap-6 to gap-10 or gap-12 */}
                    <div className="flex items-center justify-center gap-8 md:gap-12 mb-4">
                        {/* Increased width/height to 100 */}
                        <Image
                            src="/palm-tree.svg"
                            alt="Decoration Left"
                            width={100}
                            height={100}
                            className="hidden md:block opacity-90"
                        />

                        <h2 className="font-volkhov text-4xl md:text-5xl text-heading-dark">
                            Best <span className="text-brand-orange">vacation plan</span>
                        </h2>

                        <Image
                            src="/palm-tree.svg"
                            alt="Decoration Right"
                            width={100}
                            height={100}
                            className="hidden md:block opacity-90"
                        />
                    </div>

                    <p className="text-body-grey max-w-lg text-[16px] leading-relaxed">
                        Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <VacationCard
                            key={plan.id}
                            imageSrc={plan.imageSrc}
                            location={plan.location}
                            price={plan.price}
                            duration={plan.duration}
                            rating={plan.rating}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}