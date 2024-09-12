import { ReactNode } from "react";
import Image from "next/image";
import BackgroundImage from '../../public/images/hero.jpg';
import Logo from '../../public/icons/logo.svg';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={BackgroundImage}
                    alt="background image"
                    className="hidden sm:flex sm:object-cover -z-10 brightness-50"
                    priority
                    fill
                />
            </div>

            {/* Logo */}
            <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={120}
                priority
                className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
            />

            {/* Children */}
            {children}
        </div>
    );
}
