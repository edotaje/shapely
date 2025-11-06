import PolicyLayout from "../components/layout/PolicyLayout";

export default function PrivacyPolicy() {
    return (
        <PolicyLayout title="Privacy Policy">
            <section className="space-y-6">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <p className="text-sm">Data di entrata in vigore: 28 Ottobre 2025</p>
                    <p className="text-sm">Ultimo aggiornamento: 28 Ottobre 2025</p>
                </div>

                <h2 className="text-2xl font-semibold text-white mt-8">1. Titolare del trattamento</h2>
                <p>
                    <strong>Share Me di Edoardo Tajè</strong><br />
                    P.IVA 13381640963<br />
                    Via Madre Teresa di Calcutta, 4 – 20060 Bellinzago Lombardo (MI), Italia<br />
                    E-mail: <a href="mailto:info@shapely.it" className="text-blue-400 hover:underline">info@shapely.it</a><br />
                    Sito: <a href="https://shapely.it" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://shapely.it</a>
                </p>
                <p>Non è stato nominato un DPO/Referente privacy.</p>

                <h2 className="text-2xl font-semibold text-white mt-8">2. Tipologie di dati trattati</h2>
                <p>
                    Il sito <strong>shapely.it</strong> non prevede registrazioni o moduli. L’utente può contattarci volontariamente tramite:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>link <strong>mailto:</strong> per inviare una e-mail;</li>
                    <li>link <strong>tel:</strong> per avviare una chiamata;</li>
                    <li>link a WhatsApp per aprire una chat con il numero aziendale.</li>
                </ul>
                <p>
                    In tali casi, eventuali dati personali (es. nome, recapiti, contenuto del messaggio) sono forniti direttamente
                    dall’utente attraverso lo strumento scelto (client e-mail, telefono, WhatsApp) e non tramite moduli del sito.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">3. Cookie e strumenti di tracciamento</h2>
                <p>
                    Utilizziamo <strong>CookieYes</strong> esclusivamente per la gestione del banner e dei consensi cookie.
                    Non sono attivi cookie di profilazione, analytics o marketing di terze parti tramite il sito.
                </p>
                <p>
                    Per maggiori dettagli consulta la nostra{" "}
                    <a href="/cookiepolicy" className="text-blue-400 hover:underline">Cookie Policy</a>.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">4. Finalità e basi giuridiche del trattamento</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Riscontro a richieste</strong> inviate dall’utente via e-mail/telefono/WhatsApp
                        (art. 6.1.b GDPR – esecuzione di misure precontrattuali o contrattuali su richiesta dell’interessato).
                    </li>
                    <li>
                        <strong>Follow-up strettamente connesso</strong> alla richiesta originaria (chiarimenti, aggiornamenti,
                        preventivi, stato attività), basato sull’<em>interesse legittimo</em> del Titolare (art. 6.1.f GDPR).
                        L’utente può opporsi in qualsiasi momento.
                    </li>
                    <li>
                        <strong>Comunicazioni promozionali</strong> solo se è stato acquisito un <strong>consenso</strong> libero e specifico
                        (art. 6.1.a GDPR). In assenza di consenso non verrà svolta attività di marketing.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-white mt-8">5. Modalità e luogo del trattamento</h2>
                <p>
                    I dati sono trattati con strumenti manuali e informatici adottando misure di sicurezza adeguate.
                    Il sito è ospitato su <strong>GitHub Pages</strong>; ciò può comportare trasferimenti di dati tecnici
                    (es. indirizzi IP, log) verso Paesi extra SEE. In tali casi ci avvaliamo di fornitori che adottano
                    idonei strumenti di trasferimento previsti dal Capo V del GDPR (es. decisioni di adeguatezza e/o
                    Clausole Contrattuali Standard).
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">6. Comunicazione a terzi</h2>
                <p>
                    I dati non sono diffusi. Possono essere trattati da soggetti autorizzati dal Titolare e, se necessario,
                    da fornitori che prestano servizi strettamente connessi alle finalità indicate (nella loro qualità di
                    responsabili del trattamento, ove applicabile).
                </p>
                <p>
                    L’uso del link a WhatsApp comporta il trattamento dei dati anche da parte di <strong>WhatsApp Ireland Limited</strong>;
                    si invita a consultare la relativa informativa privacy sui canali ufficiali di WhatsApp.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">7. Periodo di conservazione dei dati</h2>
                <p>
                    I dati personali ricevuti tramite contatto diretto (e-mail, telefono, WhatsApp) sono conservati:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>per il tempo necessario</strong> a gestire la richiesta e l’eventuale seguito operativo;
                    </li>
                    <li>
                        <strong>nei nostri archivi</strong> per finalità di <strong>follow-up</strong> strettamente correlate alla richiesta originaria
                        (ad es. chiarimenti, aggiornamenti, preventivi o comunicazioni su attività già discusse), sulla base del nostro
                        <em> interesse legittimo</em>, per un periodo <strong>non superiore a 24 mesi</strong> dall’ultimo contatto utile,
                        salvo opposizione dell’interessato;
                    </li>
                    <li>
                        ove derivino obblighi di legge (es. amministrativo-contabili in caso di rapporto contrattuale),
                        per i <strong>termini previsti</strong> dalla normativa applicabile (fino a 10 anni per documenti contabili/fiscali).
                    </li>
                </ul>
                <p>
                    Resta fermo il diritto dell’utente di <strong>opporsi in qualsiasi momento</strong> al trattamento basato
                    sull’interesse legittimo e/o di <strong>revocare il consenso</strong> ove il trattamento ne sia basato.
                    Per finalità di marketing utilizzeremo i dati esclusivamente previo consenso.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">8. Diritti degli interessati</h2>
                <p>
                    L’utente può esercitare i diritti previsti dagli artt. 15–22 GDPR (accesso, rettifica, cancellazione,
                    limitazione, portabilità, opposizione, nonché revoca del consenso ove prestato).
                </p>
                <p>
                    Per esercitare i diritti:{" "}
                    <a href="mailto:info@shapely.it" className="text-blue-400 hover:underline">info@shapely.it</a>.
                    L’utente ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
                    (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.garanteprivacy.it</a>).
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">9. Minori</h2>
                <p>
                    Il sito non è destinato a minori di 18 anni e non raccoglie intenzionalmente dati di minori.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8">10. Aggiornamenti</h2>
                <p>
                    La presente informativa può essere soggetta a modifiche. Le versioni aggiornate saranno pubblicate
                    su questa pagina con indicazione della data di aggiornamento.
                </p>
            </section>
        </PolicyLayout>
    );
}
