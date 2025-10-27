import { Mail, Calendar } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="px-6 py-20">
            <section id="contatti" className="max-w-7xl mx-auto py-20 bg-[#0d0d0d] border-[#222] border-radius-15 relative overflow-hidden contact-section-bordered">
                {/* Gradient border interno */}
                <div className="gradient-border-inner-2"></div>
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className=" text-2xl md:text-2xl lg:text-3xl font-regular gradient-text mb-10 leading-tight">
                        Se sei arrivato fin qui, probabilmente qualcuno ti ha parlato di noi. Ora non rimane che conoscerci.
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
    );
}

