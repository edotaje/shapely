import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
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
        <section className="py-30">
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
    );
}

