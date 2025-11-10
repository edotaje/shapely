import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/layout/Footer";
import MorePanel from "../components/MorePanel";

export default function Home() {
    const [isMorePanelOpen, setIsMorePanelOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">
            {/* Sciame di particelle interattivo */}


            <HeroSection onOpenMore={() => setIsMorePanelOpen(true)} />

            <Footer />

            {/* More Panel - Slide from bottom */}
            <MorePanel
                isOpen={isMorePanelOpen}
                onClose={() => setIsMorePanelOpen(false)}
            />
        </div>
    );
}

