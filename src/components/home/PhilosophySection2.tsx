

export default function PhilosophySection2() {

    return (
        <>
            <section className="py-32 bg-black relative overflow-hidden">
                {/* Testo di sfondo "Shapely" */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="background-text-shapely">Shapely</h2>
                </div>

                {/* Contenuto principale */}
                <div className="max-w-4xl mx-auto relative z-10 px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl gradient-text mb-8 leading-tight">
                        Siamo Shapely. Trasformiamo le tue idee in esperienze digitali straordinarie.
                    </h2>
                    <a
                        href="/philosophy"
                        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all"
                    >
                        Voglio sapere di più
                    </a>

                </div>
            </section >


        </>
    );
}

