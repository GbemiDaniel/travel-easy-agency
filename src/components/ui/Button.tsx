// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'solid' | 'outline' | 'ghost';
}

export default function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
    // Base styles applied to ALL buttons: Rectangular (rounded-md)
    const baseStyles = "font-medium transition-all duration-300 rounded-md flex items-center justify-center";

    // Specific styles for each variant
    const variants = {
        solid: "bg-brand-orange text-white px-8 py-3 hover:bg-orange-600 shadow-md",
        outline: "border-2 border-brand-orange text-brand-orange px-8 py-3 hover:bg-brand-orange hover:text-white shadow-sm",
        ghost: "text-body-grey hover:text-brand-orange px-4 py-2", // Used for the Login text button
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}