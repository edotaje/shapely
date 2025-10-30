import PolicyLayout from "../components/layout/PolicyLayout";

export default function CookiePolicy() {
    return (
        <PolicyLayout title="Cookie Policy">
            <section className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <p className="text-sm">Data di entrata in vigore: 28 Ottobre 2025</p>
                    <p className="text-sm">Ultimo aggiornamento: 28 Ottobre 2025</p>
                </div>

                <h2 className="text-2xl font-semibold text-white mt-8">Cosa sono i cookie?</h2>
                <p>
                    La presente Informativa sui cookie spiega cosa sono i cookie, come li utilizziamo,
                    i tipi di cookie che utilizziamo (ovvero le informazioni che raccogliamo utilizzando
                    i cookie e come tali informazioni vengono utilizzate) e come gestire le impostazioni dei cookie.
                </p>
                <p>
                    I cookie sono piccoli file di testo utilizzati per memorizzare piccole informazioni.
                    Vengono memorizzati sul dispositivo dell'utente quando un sito web viene caricato nel browser.
                    Questi cookie contribuiscono a garantire il corretto funzionamento del sito web, migliorano
                    la sicurezza, offrono un'esperienza utente migliore e analizzano le prestazioni per identificare
                    cosa funziona e dove sono necessari miglioramenti.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">Come utilizziamo i cookie?</h2>
                <p>
                    Come la maggior parte dei servizi online, il nostro sito web utilizza cookie di prima parte
                    e di terze parti per vari scopi. I cookie di prima parte sono necessari principalmente per
                    il corretto funzionamento del sito web e non raccolgono dati personali identificabili.
                </p>
                <p>
                    I cookie di terze parti utilizzati sul nostro sito web ci aiutano principalmente a comprendere
                    le prestazioni del sito web, a tracciare il modo in cui interagisce con esso, a garantire la
                    sicurezza dei nostri servizi, a fornire annunci pubblicitari pertinenti e a migliorare la sua
                    esperienza complessiva, ottimizzando al contempo la velocità delle sue interazioni future con
                    il nostro sito web.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">Gestire le preferenze dei cookie</h2>
                <p>
                    È possibile modificare le impostazioni dei cookie in qualsiasi momento. Ciò consentirà di
                    visualizzare nuovamente il banner di consenso ai cookie e di aggiornare le proprie preferenze
                    o revocare immediatamente il proprio consenso.
                </p>
                <p>
                    Inoltre, diversi browser offrono vari metodi per bloccare ed eliminare i cookie utilizzati
                    dai siti web. È possibile modificare le impostazioni del browser per bloccare o eliminare i cookie.
                    Di seguito sono riportati i link ai documenti di assistenza su come gestire ed eliminare i cookie
                    nei principali browser web:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Chrome</a></li>
                    <li><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Safari</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Firefox</a></li>
                    <li><a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Internet Explorer</a></li>
                </ul>
            </section>
        </PolicyLayout>
    );
}

