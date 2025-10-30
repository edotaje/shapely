import ParticleSwarm from "../components/ParticleSwarm";
import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import PhilosophySection2 from "../components/home/PhilosophySection2";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/layout/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">
            {/* Sciame di particelle interattivo */}
            <ParticleSwarm />

            <HeroSection />
            <PhilosophySection />
            <PhilosophySection2 />
            <ServicesSection />

            <Footer />
        </div>
    );
}

