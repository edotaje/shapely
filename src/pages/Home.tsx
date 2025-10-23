import { Mail, Calendar, Linkedin } from "lucide-react";
import logo from "../assets/shapelynobg.png";

interface ServiceCardProps {
    title: string;
    description: string;
    tags: string[];
}

function ServiceCard({ title, description, tags }: ServiceCardProps) {
    return (
        <div className="service-card-gradient">
            {/* Gradient border interno */}
            <div className="gradient-border-inner"></div>

            {/* Contenuto card */}
            <div className="relative z-10 flex flex-col w-full">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4 text-white tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed font-light text-base">
                    {description}
                </p>

                {/* Tags container */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-purple-500/20 text-purple-200/80 text-xs font-medium backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const services = [
        {
            title: "DESIGN",
            description: "Attiva il potenziale del design per elevare il tuo business e trasforma la creatività nel tuo vantaggio competitivo.",
            tags: ["BRANDING", "CX DESIGN", "USER RESEARCH", "VISUAL DESIGN", "UX/UI DESIGN", "CONTENT DESIGN", "MOTION DESIGN", "PRODUCT DESIGN"],
        },
        {
            title: "TECH",
            description: "Potenzia i tuoi progetti con la tecnologia che ti aiuta a innovare, accelerare e scalare.",
            tags: ["WEB DEVELOPMENT", "MOBILE APPS", "E-COMMERCE", "LANDING PAGES", "RAPID PROTOTYPING", "DATA & AI", "DEVOPS", "CYBERSECURITY"],
        },
        {
            title: "MARKETING",
            description: "Fai crescere il tuo business con azioni capaci di attrarre l'attenzione, coinvolgere e convertire.",
            tags: ["GROWTH MARKETING", "CONTENT STRATEGY", "CREATIVE CAMPAIGNS", "INFLUENCER MARKETING", "SEO", "ANALYTICS"],
        }
    ];

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans">

            {/* Hero Section */}
            <section className="h-screen relative flex flex-col overflow-hidden">
                {/* Animated Aurora Background */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-950 to-black">
                    <div className="absolute inset-0 opacity-60">
                        <div className="aurora-blob aurora-blob-1"></div>
                        <div className="aurora-blob aurora-blob-2"></div>
                        <div className="aurora-blob aurora-blob-3"></div>
                    </div>
                </div>

                {/* Overlay per migliorare la leggibilità */}
                <div className="absolute inset-0 bg-black/25 z-5"></div>

                {/* Navbar */}
                <nav className="relative z-20 flex items-center justify-between px-8 py-6">
                    <div className="flex items-center gap-2 ">
                        <div className="w-10 h-10 ">
                            <img src={logo} alt="Shapely" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-white font-semibold text-lg">Shapely</span>
                    </div>


                    <a href="mailto:info@shapely.it" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">
                        <Mail className="h-4 w-4" /> info@shapely.it
                    </a>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold gradient-text mb-6 tracking-tight">
                        Shapely Studio.
                    </h1>
                    <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl">
                        Diamo forma alle tue idee.
                    </p>


                </div>

                {/* Footer buttons - LinkedIn e Made with love */}
                <div className="relative z-20 flex justify-between items-end px-8 pb-6">
                    {/* LinkedIn button - sinistra */}
                    <a
                        href="https://linkedin.com/company/shapely"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2 hover:bg-white/20 transition-all"
                    >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                    </a>

                    {/* Made with love - destra */}
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs flex items-center gap-2">
                        <span>💜</span>
                        <span>Made with love</span>
                    </div>
                </div>

                {/* Gradiente di transizione verso la sezione successiva */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-5 translate-y-12"></div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 bg-black relative overflow-hidden">
                {/* Testo di sfondo "Shapely" */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="background-text-shapely">Shapely</h2>
                </div>

                {/* Contenuto principale */}
                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl  gradient-text mb-8 leading-tight">
                        Siamo Shapely. Trasformiamo idee in esperienze digitali straordinarie per aziende innovative.
                    </h2>
                    <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all">
                        La nostra filosofia
                    </button>

                </div>
            </section>

            {/* Services Section - Wireframe */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text mb-20 tracking-wide w-fit">
                        I Nostri Servizi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                tags={service.tags}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Keep in Touch */}
            <div className="  px-6 py-20 grid-bg">
                <section id="contatti" className="max-w-7xl mx-auto py-20 bg-[#0d0d0d] border-[#222] border-radius-15 relative overflow-hidden contact-section-bordered">
                    {/* Gradient border interno */}
                    <div className="gradient-border-inner-2"></div>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold gradient-text mb-10 tracking-wide">
                            Se ci siamo già conosciuti...
                        </h2>
                        <p className=" text-gray-300">
                            Scrivici un messaggio con il tuo contesto o prenota 20 minuti: capiamo se possiamo aiutarti.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <a href="mailto:info@shapely.it" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-white/20 text-black text-sm hover:bg-white/20 transition-all">
                                <Mail className="h-4 w-4" /> info@shapely.it
                            </a>
                            <a href="https://calendly.com/tuostudio/coffee" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">
                                <Calendar className="h-4 w-4" /> Prenota un caffè
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-gray-400">
                            Preferisci WhatsApp? <a href="https://wa.me/3999999999" className="underline hover:text-white transition-colors">Scrivici qui</a>.
                        </p>
                    </div>


                </section>
            </div>

            {/* Footer - Wireframe */}
            <footer className="py-10 border-t border-[#222]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm opacity-80">© {new Date().getFullYear()} Share Me di Edoardo Tajè — P.IVA 13381640963</div>
                    <div className="flex items-center gap-4 text-sm">
                        <a href="https://btindustries.it" className="opacity-80 hover:opacity-100">About Us</a>
                        <a href="/privacy" className="opacity-80 hover:opacity-100">Privacy Policy</a>
                        <a href="/privacy" className="opacity-80 hover:opacity-100">Cookie Policy</a>

                    </div>
                </div>
            </footer>
        </div>
    );
}

