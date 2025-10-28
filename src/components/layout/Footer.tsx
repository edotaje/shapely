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
                <h3 className="text-3xl font-semibold gradient-text mb-6 w-fit">Cookie Policy</h3>
                <div className="text-white/80 space-y-4 leading-relaxed">
                    <p>
                        In Shapely crediamo che ogni progetto digitale debba raccontare una storia unica.
                        Non ci limitiamo a costruire siti web o applicazioni: creiamo esperienze che
                        connettono le persone con il tuo brand in modo autentico e memorabile.
                    </p>
                </div>

                {/* Start CookieYes cookie policy */}
                <style>{`
  a.cky-banner-element {
    padding: 8px 30px;
    background: #f8f9fa;
    color: #858a8f;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    border-radius: 2px;
    cursor: pointer
  }
`}</style>
                <h1 className="cookie-policy-h1">Informativa sui cookie</h1>
                <div className="cookie-policy-date-container">
                    <p>Data di entrata in vigore: October 28, 2025</p>
                    <p>Ultimo aggiornamento: October 28, 2025</p>
                </div>&nbsp;<h2>Cosa sono i cookie?</h2>
                <div className="cookie-policy-p">
                    <p>La presente Informativa sui cookie spiega cosa sono i cookie, come li utilizziamo, i tipi di cookie che utilizziamo (ovvero le informazioni che raccogliamo utilizzando i cookie e come tali informazioni vengono utilizzate) e come gestire le impostazioni dei cookie.</p>
                    <p>I cookie sono piccoli file di testo utilizzati per memorizzare piccole informazioni. Vengono memorizzati sul dispositivo dell'utente quando un sito web viene caricato nel browser. Questi cookie contribuiscono a garantire il corretto funzionamento del sito web, migliorano la sicurezza, offrono un'esperienza utente migliore e analizzano le prestazioni per identificare cosa funziona e dove sono necessari miglioramenti.</p>
                </div>&nbsp;<h2>Come utilizziamo i cookie?</h2>
                <div className="cookie-policy-p">
                    <p>Come la maggior parte dei servizi online, il nostro sito web utilizza cookie di prima parte e di terze parti per vari scopi. I cookie di prima parte sono necessari principalmente per il corretto funzionamento del sito web e non raccolgono dati personali identificabili.</p>
                    <p>I cookie di terze parti utilizzati sul nostro sito web ci aiutano principalmente a comprendere le prestazioni del sito web, a tracciare il modo in cui interagisce con esso, a garantire la sicurezza dei nostri servizi, a fornire annunci pubblicitari pertinenti e a migliorare la sua esperienza complessiva, ottimizzando al contempo la velocità delle sue interazioni future con il nostro sito web.</p>
                </div>&nbsp;<h2>Tipi di cookie utilizzati</h2>
                <div className="cky-audit-table-element"></div>&nbsp;<h2 style={{ marginBottom: '20px' }}>Gestire le preferenze dei cookie</h2><a className="cky-banner-element">Preferenze relative al consenso</a><br />
                <div>
                    <p>È possibile modificare le impostazioni dei cookie in qualsiasi momento facendo clic sul tasto “Preferenze di consenso” in alto. Ciò consentirà di visualizzare nuovamente il banner di consenso ai cookie e di aggiornare le proprie preferenze o revocare immediatamente il proprio consenso.</p>
                    <p>Inoltre, diversi browser offrono vari metodi per bloccare ed eliminare i cookie utilizzati dai siti web. È possibile modificare le impostazioni del browser per bloccare o eliminare i cookie. Di seguito sono riportati i link ai documenti di assistenza su come gestire ed eliminare i cookie nei principali browser web.</p>
                    <p>Chrome: <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/accounts/answer/32050">https://support.google.com/accounts/answer/32050</a></p>
                    <p>Safari: <a target="_blank" rel="noopener noreferrer" href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">https://support.apple.com/en-in/guide/safari/sfri11471/mac</a></p>
                    <p>Firefox: <a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a></p>
                    <p>Internet Explorer: <a target="_blank" rel="noopener noreferrer" href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a></p>
                    <p>Qualora si stia utilizzando un browser web diverso, si prega di fare riferimento alla documentazione di assistenza ufficiale.</p>
                </div>&nbsp;<p className="cookie-policy-p"> Informativa sui cookie generata da <a target="_blank" rel="noopener noreferrer" href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">CookieYes - Generatore di informative sui cookie</a></p>
                {/* End CookieYes cookie policy */}
            </Modal>


        </footer>
    );
}

