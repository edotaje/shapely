import { useEffect, useState } from "react";

interface MorePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

function TerminalHeader({ onClose }: { onClose: () => void }) {
    const title = "$ shapely_info.txt";
    const [displayedTitle, setDisplayedTitle] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Typing animation
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setDisplayedTitle(title);
            return;
        }

        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= title.length) {
                setDisplayedTitle(title.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);

        return () => clearInterval(typingInterval);
    }, [title]);

    useEffect(() => {
        // Cursor blink animation
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            setShowCursor(true);
            return;
        }

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="mb-8 font-mono text-sm md:text-base">
            <button
                onClick={onClose}
                className="terminal-back-btn group mb-8 flex justify-end items-center gap-2 text-sm md:text-base font-mono"
            >
                <span className="text-purple-400/90">{'<'}</span>
                <span className="text-purple-300/80 group-hover:text-purple-200 transition-colors">
                    Chiudi
                </span>
            </button>
            <span className="text-purple-400/90">
                {displayedTitle}
            </span>
            <span
                className={`inline-block w-2 h-4 ml-1 bg-purple-400/90 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ transition: 'opacity 0.1s' }}
            />
        </div>
    );
}

export default function MorePanel({ isOpen, onClose }: MorePanelProps) {
    // Blocca lo scroll del body quando il pannello è aperto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Panel */}
            <div
                className={`fixed inset-0 z-50 transition-transform duration-700 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="h-full overflow-y-auto">
                    {/* Content - Scrollable */}
                    <section className="py-32 max-w-5xl mx-auto relative z-10">
                        <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Single Terminal Card */}
                            <div className="terminal-card">
                                {/* Scanlines overlay */}
                                <div className="terminal-scanlines" />

                                {/* CRT flicker overlay */}
                                <div className="terminal-flicker" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header with typing effect */}
                                    <TerminalHeader onClose={onClose} />

                                    {/* Content sections */}
                                    <div className="space-y-12">
                                        {/* Chi siamo */}
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-purple-300/90 mb-6 font-mono">
                                                /// Chi siamo
                                            </h2>
                                            <div className="space-y-4 text-gray-300/80 text-base md:text-lg leading-relaxed">
                                                <div className="bg-black/40 border-l-2 border-purple-500/30 pl-4 py-2 text-sm md:text-base">
                                                    <div className="space-y-1 font-mono">
                                                        <div><span className="text-blue-300/70">TIPO:</span> <span className="text-purple-200/80">Friends & Family Network</span></div>
                                                        <div><span className="text-blue-300/70">FILOSOFIA:</span> <span className="text-purple-200/80">Relazioni autentiche</span></div>
                                                        <div><span className="text-blue-300/70">STRUTTURA:</span> <span className="text-purple-200/80">Piccolo ecosistema collaborativo</span></div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Shapely nasce da un'idea semplice: fare progetti insieme, tra persone che si fidano l'una dell'altra.
                                                    Non ci interessa essere un'agenzia, né costruire un brand da vetrina.
                                                    Preferiamo restare qualcosa di più vero, più vicino: una rete dove i progetti nascono da relazioni autentiche e crescono grazie alla collaborazione.
                                                </p>
                                                <p>
                                                    Un posto dove le idee trovano forma grazie alle relazioni — e dove ogni progetto è un modo per rafforzare il legame tra chi crea e chi sogna.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Cosa facciamo */}
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-purple-300/90 mb-6 font-mono">
                                                /// Cosa facciamo
                                            </h2>
                                            <div className="space-y-4 text-gray-300/80 text-base md:text-lg leading-relaxed">
                                                <p>
                                                    Ci occupiamo di coordinare, dare forma e direzione alle idee, lasciando spazio ai talenti giusti per ogni sfida.
                                                </p>
                                                <div className="bg-black/40 border-l-2 border-purple-500/30 pl-4 py-3">
                                                    <div className="space-y-2 font-mono text-sm md:text-base">
                                                        <div className="text-blue-300/70">{'>'} COMPETENZE NETWORK:</div>
                                                        <div className="pl-4 space-y-1">
                                                            <div className="text-purple-200/80">• Designer</div>
                                                            <div className="text-purple-200/80">• Sviluppatori</div>
                                                            <div className="text-purple-200/80">• Marketer</div>
                                                            <div className="text-purple-200/80">• Creativi</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Quando possiamo, ci piace anche restituire qualcosa.
                                                    Collaboriamo a progetti pro bono, sosteniamo iniziative locali, condividiamo strumenti e idee.
                                                    Crediamo che il valore di un progetto non si misuri solo nel risultato, ma anche nel contributo che lascia alla comunità.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Come lo facciamo */}
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-purple-300/90 mb-6 font-mono">
                                                /// Come lo facciamo
                                            </h2>
                                            <div className="space-y-4 text-gray-300/80 text-base md:text-lg leading-relaxed">
                                                <div className="bg-black/40 border-l-2 border-purple-500/30 pl-4 py-2 text-sm md:text-base">
                                                    <div className="space-y-1 font-mono">
                                                        <div><span className="text-blue-300/70">APPROCCIO:</span> <span className="text-purple-200/80">Leggero ma serio</span></div>
                                                        <div><span className="text-blue-300/70">FLESSIBILITÀ:</span> <span className="text-purple-200/80">Precisa</span></div>
                                                        <div><span className="text-blue-300/70">VALORI:</span> <span className="text-purple-200/80">Curiosità · Rispetto · Qualità</span></div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Crediamo che il modo migliore per lavorare sia circondarsi di persone che condividono lo stesso spirito — curiosità, rispetto, voglia di fare bene le cose.
                                                    Per questo Shapely non è un team fisso, ma un insieme di competenze che si muovono in base ai progetti.
                                                </p>
                                                <p>
                                                    Gestiamo i progetti con cura, ma senza rigidità: ogni collaborazione è un dialogo, ogni risultato nasce da un equilibrio tra professionalità e fiducia reciproca.
                                                </p>
                                            </div>
                                        </div>

                                        {/* A chi lo facciamo */}
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-purple-300/90 mb-6 font-mono">
                                                /// A chi lo facciamo
                                            </h2>
                                            <div className="space-y-4 text-gray-300/80 text-base md:text-lg leading-relaxed">
                                                <div className="bg-black/40 border-l-2 border-purple-500/30 pl-4 py-2 text-sm md:text-base">
                                                    <div className="space-y-1 font-mono">
                                                        <div><span className="text-blue-300/70">OBIETTIVO:</span> <span className="text-purple-200/80">Relazioni durature</span></div>
                                                        <div><span className="text-blue-300/70">CRESCITA:</span> <span className="text-purple-200/80">Passaparola organico</span></div>
                                                        <div><span className="text-blue-300/70">STRATEGIA:</span> <span className="text-purple-200/80">Piano & genuino</span></div>
                                                    </div>
                                                </div>
                                                <p>
                                                    Non cerchiamo clienti, cerchiamo relazioni durature — e spesso, da un progetto, nasce un'amicizia.
                                                </p>
                                                <p>
                                                    Non facciamo pubblicità.
                                                    Preferiamo che il nostro nome circoli attraverso il passaparola: quando qualcuno ci raccomanda, sappiamo che lo fa perché ha avuto un'esperienza positiva, non perché lo abbiamo chiesto.
                                                    È così che vogliamo crescere: piano, ma in modo genuino.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Terminal Card Styles */}
            <style>{`
                .terminal-back-btn {
                    position: relative;
                    background: rgba(10, 10, 10, 0.6);
                    border: 1px solid rgba(147, 51, 234, 0.3);
                    border-radius: 0.5rem;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .terminal-back-btn:hover {
                    background: rgba(147, 51, 234, 0.1);
                    border-color: rgba(147, 51, 234, 0.5);
                    box-shadow: 0 0 15px rgba(147, 51, 234, 0.2);
                }

                .terminal-back-btn:active {
                    transform: scale(0.98);
                }

                .terminal-card {
                    position: relative;
                    background: #0a0a0a;
                    border: 1px solid rgba(147, 51, 234, 0.4);
                    border-radius: 1rem;
                    padding: 1.5rem;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 
                        0 0 20px rgba(147, 51, 234, 0.1),
                        0 0 40px rgba(147, 51, 234, 0.05),
                        inset 0 0 60px rgba(147, 51, 234, 0.02);
                }

                .terminal-card:hover {
                    border-color: rgba(147, 51, 234, 0.5);
                    box-shadow: 
                        0 0 25px rgba(147, 51, 234, 0.15),
                        0 0 50px rgba(147, 51, 234, 0.08),
                        inset 0 0 60px rgba(147, 51, 234, 0.03);
                }

                /* Scanlines effect */
                .terminal-scanlines {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        rgba(0, 0, 0, 0.15) 0px,
                        rgba(0, 0, 0, 0.15) 1px,
                        transparent 1px,
                        transparent 2px
                    );
                    pointer-events: none;
                    z-index: 5;
                    opacity: 0.3;
                }

                /* CRT flicker effect */
                .terminal-flicker {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(147, 51, 234, 0.02);
                    pointer-events: none;
                    z-index: 4;
                    animation: crt-flicker 0.15s infinite;
                    opacity: 0;
                }

                @keyframes crt-flicker {
                    0% { opacity: 0.05; }
                    50% { opacity: 0.08; }
                    100% { opacity: 0.05; }
                }

                /* Respect prefers-reduced-motion */
                @media (prefers-reduced-motion: reduce) {
                    .terminal-back-btn {
                        transition: none;
                    }

                    .terminal-back-btn:hover {
                        box-shadow: none;
                    }

                    .terminal-card {
                        transition: none;
                    }
                    
                    .terminal-scanlines {
                        display: none;
                    }
                    
                    .terminal-flicker {
                        animation: none !important;
                        display: none;
                    }
                }

                /* Responsive padding */
                @media (min-width: 768px) {
                    .terminal-card {
                        padding: 2.5rem;
                    }
                }
            `}</style>
        </>
    );
}

