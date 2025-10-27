import ParticleSwarm from "../components/ParticleSwarm";
import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">
            {/* Sciame di particelle interattivo */}
            <ParticleSwarm />

            <HeroSection />
            <PhilosophySection />
            <ServicesSection />

            <Footer />
        </div>
    );
}

