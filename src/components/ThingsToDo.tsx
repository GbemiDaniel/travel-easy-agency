// src/components/ThingsToDo.tsx
import React from 'react';
import Image from 'next/image';

export default function ThingsToDo() {
    return (
        <section className="w-full bg-[#F7F8FC] py-20">
            <div className="max-w-[1140px] mx-auto px-6 relative">

                {/* --- HEADER --- */}
                <div className="flex flex-col items-center text-center mb-16 relative z-10">
                    <h2 className="font-volkhov text-4xl text-heading-dark mb-4">
                        Things you need <span className="text-brand-orange">to do</span>
                    </h2>
                    <p className="text-body-grey max-w-md text-[15px] leading-relaxed">
                        We ensure that you'll embark on a perfectly planned, safe vacation at a price you can afford.
                    </p>

                    {/* Decorative Flight Path SVG */}
                    {/* Assuming you want to keep this from the original code block */}
                    <div className="hidden lg:block absolute right-4 md:right-12 top-0 w-32 h-24 opacity-80 pointer-events-none">
                        <Image src="/flight-path.svg" alt="Flight path decoration" fill className="object-contain" />
                    </div>
                </div>

                {/* --- CARDS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                    {/* Card 1: Sign Up */}
                    <div className="bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow group relative overflow-hidden">
                        <div className="mb-6 inline-block relative w-12 h-12">
                            {/* Replaced react-icon with custom SVG export */}
                            <Image
                                src="/sign-up-icon.svg"
                                alt="Sign Up Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="font-bold text-heading-dark text-xl mb-3">Sign Up</h3>
                        <p className="text-body-grey text-[14px] leading-relaxed">
                            Completes all the work associated with planning and processing
                        </p>
                    </div>

                    {/* Card 2: Worth of Money */}
                    <div className="bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow group relative overflow-hidden">
                        <div className="mb-6 inline-block relative w-12 h-12">
                            {/* Replaced react-icon with custom SVG export */}
                            <Image
                                src="/wallet-icon.svg"
                                alt="Wallet Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="font-bold text-heading-dark text-xl mb-3">Worth of Money</h3>
                        <p className="text-body-grey text-[14px] leading-relaxed">
                            After successful access then book from exclusive deals & pricing
                        </p>
                    </div>

                    {/* Card 3: Exciting Travel */}
                    <div className="bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow group relative overflow-hidden">
                        <div className="mb-6 inline-block relative w-12 h-12">
                            {/* Replaced react-icon with custom SVG export */}
                            <Image
                                src="/location-icon.svg"
                                alt="Location Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="font-bold text-heading-dark text-xl mb-3">Exciting Travel</h3>
                        <p className="text-body-grey text-[14px] leading-relaxed">
                            Start and explore a wide range of exciting travel experience.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}