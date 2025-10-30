import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
    const services = [
        {
            title: "Brand & Experience Design",
            description: "Esperienze digitali che uniscono estetica, funzionalità e strategia. Progettiamo identità e prodotti che connettono persone e brand.",
            tags: ["Brand Identity", "UX/UI Design", "Product & Service Design", "Design Systems", "Motion & Interaction", "Creative Prototyping", "AI-Driven Design", "Experience Innovation"],
        },
        {
            title: "Digital Development",
            description: "Soluzioni digitali intelligenti che scalano con il tuo business. Uniamo sviluppo, automazione e intelligenza artificiale per dare vita a nuove possibilità.",
            tags: ["Web & App Development", "AI & Automation", "Data Intelligence", "E-commerce Solutions", "Smart Interfaces", "Rapid Prototyping", "Cloud & DevOps", "Cybersecurity"],
        },
        {
            title: "Growth & Performance",
            description: "Strategie data-driven e contenuti creativi per accelerare la crescita. Dal brand awareness alla conversione, trasformiamo insight in risultati.",
            tags: ["Growth & Performance", "AI Marketing", "Content Strategy", "Creative Campaigns", "Influencer & Community", "SEO & Visibility", "Analytics & Insights", "Digital Storytelling"],
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

