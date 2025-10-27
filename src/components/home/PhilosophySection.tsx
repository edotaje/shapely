import { useState } from 'react';
import Modal from '../Modal';

export default function PhilosophySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-md hover:bg-white/20 transition-all"
                    >
                        La nostra filosofia
                    </button>
                </div>
            </section>

            {/* Modal con il contenuto della filosofia */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h3 className="text-3xl font-semibold gradient-text mb-6 w-fit">La nostra filosofia</h3>
                <div className="text-white/80 space-y-4 leading-relaxed">
                    <p>
                        In Shapely crediamo che ogni progetto digitale debba raccontare una storia unica.
                        Non ci limitiamo a costruire siti web o applicazioni: creiamo esperienze che
                        connettono le persone con il tuo brand in modo autentico e memorabile.
                    </p>
                    <p>
                        La nostra missione è trasformare la complessità tecnologica in semplicità elegante.
                        Lavoriamo al fianco di aziende innovative che vogliono distinguersi, offrendo
                        soluzioni su misura che uniscono design raffinato, tecnologia all'avanguardia
                        e strategia efficace.
                    </p>
                    <p>
                        Ogni linea di codice, ogni pixel, ogni interazione è pensata per dare forma
                        alla tua visione e portare risultati concreti. Perché per noi, il digitale
                        non è solo tecnologia: è l'arte di dare forma al futuro.
                    </p>
                </div>
            </Modal>
        </>
    );
}

