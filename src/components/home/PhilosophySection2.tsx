import { useState } from 'react';
import Modal from '../Modal';

export default function PhilosophySection2() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        Siamo Shapely. Trasformiamo idee in esperienze digitali straordinarie per aziende innovative.
                    </h2>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all"
                    >
                        La nostra filosofia
                    </button>

                </div>
            </section >

            {/* Modal con il contenuto della filosofia */}
            < Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)
            }>
                <h3 className="text-3xl font-semibold gradient-text mb-6 w-fit">La nostra filosofia</h3>
                <div className="text-white/80 space-y-4 leading-relaxed">
                    <p className="mb-2">

                        Non siamo qui per fare rumore.
                        Ci piace lavorare bene, in silenzio, e far parlare i risultati.
                    </p>
                    <p className="mb-2">
                        Shapely non è una classica agenzia che si vende online o punta tutto sulle ads.
                        Siamo uno studio che cresce grazie al passaparola, ai progetti che funzionano e alle persone che credono in quello che facciamo.
                    </p>
                    <p className="mb-2">
                        Non accettiamo tutto.
                        Preferiamo i lavori che ci stimolano davvero, con clienti che vogliono costruire qualcosa di bello e fatto come si deve.
                    </p>
                    <p className="mb-2">
                        Non abbiamo bisogno di apparire ovunque — ci basta essere nel posto giusto, con le persone giuste.
                        E se sei arrivato fin qui, forse lo hai capito anche tu.
                    </p>
                </div>
            </Modal >
        </>
    );
}

