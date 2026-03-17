// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center text-heading-dark hover:bg-brand-orange hover:text-white hover:shadow-[0_8px_20px_rgba(250,116,54,0.3)] hover:-translate-y-1 transition-all duration-300"
        >
            {children}
        </a>
    );

    return (
        <footer className="w-full bg-white pt-20 pb-10 border-t border-gray-50">
            <div className="max-w-[1140px] mx-auto px-6">

                {/* Main Footer Layout: Flexbox justify-between */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">

                    {/* --- LEFT SIDE: Brand Anchor --- */}
                    <div className="flex flex-col items-start max-w-[280px]">
                        <Link href="/" className="mb-8">
                            <Image
                                src="/logo.svg"
                                alt="TravelEasy Logo"
                                width={150}
                                height={45}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-body-grey text-[16px] leading-relaxed mb-10">
                            Book your trip in minute, get full <br />
                            Control for much longer.
                        </p>

                        <div className="flex items-center gap-4 mb-8">
                            <SocialIcon href="#"><FaFacebookF className="w-4 h-4" /></SocialIcon>
                            <SocialIcon href="#"><FaInstagram className="w-5 h-5" /></SocialIcon>
                            <SocialIcon href="#"><FaXTwitter className="w-4 h-4" /></SocialIcon>
                        </div>

                        <span className="text-body-grey text-[15px] font-semibold tracking-wide">
                            +1 623 533 8535
                        </span>
                    </div>

                    {/* --- RIGHT SIDE: Clustered Links --- */}
                    {/* This flex container groups them and creates identical spacing between them */}
                    <div className="flex flex-col sm:flex-row gap-12 md:gap-20 lg:gap-28 mt-4 md:mt-0">

                        {/* Column: Company */}
                        <div className="flex flex-col">
                            <h4 className="font-bold text-heading-dark text-[18px] mb-8">Company</h4>
                            <ul className="flex flex-col gap-5 text-body-grey text-[15px]">
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">About</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Careers</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Logistic</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Privacy & Policy</Link></li>
                            </ul>
                        </div>

                        {/* Column: Contact */}
                        <div className="flex flex-col">
                            <h4 className="font-bold text-heading-dark text-[18px] mb-8">Contact</h4>
                            <ul className="flex flex-col gap-5 text-body-grey text-[15px]">
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Help/FAQ</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Press</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Affiliates</Link></li>
                            </ul>
                        </div>

                        {/* Column: More */}
                        <div className="flex flex-col">
                            <h4 className="font-bold text-heading-dark text-[18px] mb-8">More</h4>
                            <ul className="flex flex-col gap-5 text-body-grey text-[15px]">
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Press Centre</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Our Blog</Link></li>
                                <li><Link href="#" className="hover:text-brand-orange transition-colors">Low fare tips</Link></li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[#999999] text-[14px]">
                    <p className="font-medium">
                        Copyright, TravelEasy 2025. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-brand-orange transition-colors font-medium">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}