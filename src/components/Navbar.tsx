"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './ui/Button';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Destination', href: '#' },
        { name: 'Tour', href: '#' },
        { name: 'Blog', href: '#' },
    ];

    return (
        <>
            {/* 1. Placeholder adjusted for lg breakpoint */}
            <div className="w-full h-[90px] lg:h-[100px]" aria-hidden="true" />

            {/* 2. Fixed Outer Wrapper */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? 'bg-transparent pt-4 px-4 lg:pt-6 lg:px-8'
                    : 'bg-white pt-0 px-0'
                    }`}
            >
                {/* 3. The Morphing Nav: Padding and rounding adjusted for lg screens */}
                <nav
                    className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out relative ${isScrolled
                        ? 'max-w-[1000px] bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 rounded-2xl lg:rounded-[2rem] py-3 px-6 lg:px-8'
                        : 'max-w-[1140px] bg-transparent py-6 px-6'
                        }`}
                >

                    {/* --- BRAND LOGO --- */}
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        {/* Smoother scaling: base -> md -> lg */}
                        <div className="relative w-[120px] h-[30px] md:w-[135px] md:h-[32px] lg:w-[150px] lg:h-[35px]">
                            <Image
                                src="/logo.svg"
                                alt="TravelEasy Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* --- DESKTOP NAVIGATION --- */}
                    {/* Shifted from hidden md:flex to hidden lg:flex */}
                    <div className="hidden lg:flex flex-1 items-center justify-center gap-8 xl:gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-medium transition-colors hover:text-brand-orange ${link.name === 'Home' ? 'text-heading-dark' : 'text-[#666666]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* --- DESKTOP AUTH BUTTONS --- */}
                    {/* Shifted to lg:flex */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-shrink-0">
                        <Link href="#" className="text-brand-orange font-medium text-[15px] hover:text-orange-600 transition-colors">
                            Login
                        </Link>
                        <Button variant="solid" className="px-8 py-3 rounded-lg shadow-[0_10px_20px_rgba(250,116,54,0.3)] text-[15px]">
                            Sign up
                        </Button>
                    </div>

                    {/* --- MOBILE/TABLET HAMBURGER TOGGLE --- */}
                    {/* Now visible on md (tablet), hidden on lg */}
                    <button
                        className="lg:hidden text-heading-dark p-2 focus:outline-none ml-auto"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>

                    {/* --- MOBILE/TABLET DROPDOWN MENU --- */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-[110%] left-0 w-full bg-white shadow-2xl rounded-2xl flex flex-col items-center py-8 gap-6 lg:hidden border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-heading-dark text-lg font-medium hover:text-brand-orange transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col items-center gap-4 w-full px-8 mt-4 max-w-sm">
                                <Link
                                    href="#"
                                    className="w-full text-center py-3 font-medium text-brand-orange border-2 border-brand-orange/20 rounded-xl hover:bg-orange-50 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Button variant="solid" className="w-full py-3 rounded-xl text-[16px]">
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}