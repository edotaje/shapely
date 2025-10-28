import { useState, useEffect } from "react";
import Modal from "../Modal";

export default function Footer() {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

    // Gestione apertura modal tramite URL hash
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#privacy-policy') {
                setIsPrivacyModalOpen(true);
            } else if (hash === '#cookie-policy') {
                setIsCookieModalOpen(true);
            }
        };

        // Controlla l'hash al caricamento della pagina
        handleHashChange();

        // Ascolta i cambiamenti dell'hash
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Carica lo script CookieYes quando il modal è aperto
    useEffect(() => {
        if (isCookieModalOpen) {
            const script = document.createElement('script');
            script.id = 'cky-cookie-policy';
            script.type = 'text/javascript';
            script.src = 'https://cdn-cookieyes.com/client_data/5776a8a9de613bf46d2a673b/cookie-policy/script.js';
            script.async = true;

            document.body.appendChild(script);

            return () => {
                // Rimuovi lo script quando il modal viene chiuso
                const existingScript = document.getElementById('cky-cookie-policy');
                if (existingScript) {
                    existingScript.remove();
                }
            };
        }
    }, [isCookieModalOpen]);

    return (
        <footer className="py-10 border-t border-[#222]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm opacity-80">© {new Date().getFullYear()} Share Me di Edoardo Tajè — P.IVA 13381640963
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <a href="https://btindustries.it" className="opacity-80 hover:opacity-100">Chi siamo</a>
                    <button onClick={() => setIsPrivacyModalOpen(true)} className="opacity-80 hover:opacity-100">Privacy Policy</button>
                    <button onClick={() => setIsCookieModalOpen(true)} className="opacity-80 hover:opacity-100">Cookie Policy</button>
                </div>
            </div>
            <div className="mx-auto max-w-7xl mt-4 sm:px-6 lg:px-8 flex items-center justify-start">

                <p className="text-xs opacity-80"> 💜 Made with love by BT Industries</p>
            </div>

            {/* Modal Privacy Policy */}
            <Modal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)}>
                <h3 className="text-3xl font-semibold gradient-text mb-6 w-fit">Privacy Policy</h3>
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

            {/* Modal Cookie Policy */}
            <Modal isOpen={isCookieModalOpen} onClose={() => setIsCookieModalOpen(false)}>
                <h3 className="text-3xl font-semibold gradient-text mb-6 w-fit">Informativa sui cookie</h3>
                <div className="text-white/80 space-y-4 leading-relaxed">
                    {/* Contenitore per CookieYes cookie policy */}
                    <div id="cookie-policy-container"></div>
                </div>
            </Modal>


        </footer>
    );
}

