import type { ReactNode } from "react";
import ParticleSwarm from "../ParticleSwarm";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface PolicyLayoutProps {
    title: string;
    children: ReactNode;
}

export default function PolicyLayout({ title, children }: PolicyLayoutProps) {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">
            {/* Sciame di particelle interattivo */}
            <ParticleSwarm />

            <Navbar />

            {/* Contenuto principale */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8 gradient-text tracking-wide ">
                    {title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none min-h-100">
                    {children}
                </div>
            </div>

            {/* Footer sempre uguale */}
            <Footer />
        </div>
    );
}

