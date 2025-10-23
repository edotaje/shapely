import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, Mail, ExternalLink, Moon, Sun } from "lucide-react";


interface CapabilityBlock {
  title: string;
  desc: string;
  tags: string[];
  accent: string;
}

interface CaseItem {
  title: string;
  intro: string;
  link: string;
}

interface Step {
  k: string;
  t: string;
  d: string;
}

interface Person {
  n: string;
  r: string;
  l: string;
}

interface Quote {
  q: string;
  a: string;
}

interface FAQItem {
  q: string;
  a: string;
}

export default function ReferralLanding() {
  const [dark, setDark] = useState<boolean>(true);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-50">
        <SiteNav dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <TrustBar />
          <Capabilities />
          <Cases />
          <Approach />
          <Team />
          <Testimonials />
          <FAQ />
          <KeepInTouch />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

// ===== NAVBAR =====
function SiteNav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          {/* TODO: Sostituisci con il tuo logo */}
          <span className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-amber-400 bg-clip-text text-transparent">TuoStudio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#lavori" className="hover:opacity-80">Lavori</a>
          <a href="#competenze" className="hover:opacity-80">Competenze</a>
          <a href="#metodo" className="hover:opacity-80">Metodo</a>
          <a href="#team" className="hover:opacity-80">Team</a>
          <a href="#contatti" className="hover:opacity-80">Contatti</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contatti" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Calendar className="h-4 w-4" />
            <span>Incontriamoci</span>
          </a>
          <button aria-label="toggle dark mode" onClick={() => setDark(!dark)} className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 h-9 w-9">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-300/80 dark:border-neutral-700/80 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Studio su invito | Referral-first</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Diamo forma alle tue <span className="bg-gradient-to-r from-fuchsia-500 to-amber-400 bg-clip-text text-transparent">idee</span> e le portiamo al mercato.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
            {/* TODO: value proposition breve */}
            Siamo un piccolo team di designer e developer. Lavoriamo per imprenditori e team di prodotto che abbiamo incontrato di persona.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/onepager.pdf" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm">
              <Download className="h-4 w-4" /> Scarica One‑Pager
            </a>
            <a href="#lavori" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm">
              Guarda i lavori <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
      <BackgroundGlow />
    </section>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 flex justify-center">
      <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-sky-500/20 to-amber-400/30 blur-3xl" />
    </div>
  );
}

// ===== TRUST BAR / CLIENTI =====
function TrustBar() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Abbiamo collaborato con</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {/* TODO: sostituisci con i loghi reali */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-md bg-neutral-200 dark:bg-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== COMPETENZE =====
function Capabilities() {
  const blocks: CapabilityBlock[] = [
    {
      title: "Design",
      desc: "Branding, UX/UI, prototipi — dal concept al pixel.",
      tags: ["Branding", "UX/UI", "Design System", "Prototyping"],
      accent: "from-fuchsia-500 to-rose-400",
    },
    {
      title: "Tech",
      desc: "Siti e app moderne. Performance e solidità.",
      tags: ["Web App", "E‑commerce", "Landing", "DevOps"],
      accent: "from-sky-500 to-indigo-500",
    },
    {
      title: "Marketing",
      desc: "Go‑to‑market, contenuti, analytics e SEO mirata.",
      tags: ["GTM", "Content", "SEO", "Analytics"],
      accent: "from-amber-400 to-lime-400",
    },
  ];

  return (
    <section id="competenze" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Come possiamo essere utili</h2>
          <a href="#contatti" className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100">
            Richiedi un mini‑audit <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <div key={b.title} className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className={`absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br ${b.accent} opacity-20 blur-2xl`} />
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">{b.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {b.tags.map((t) => (
                  <span key={t} className="rounded-full border border-neutral-300 dark:border-neutral-700 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CASE STUDIES (teaser) =====
function Cases() {
  const items: CaseItem[] = [
    {
      title: "Progetto Alfa",
      intro: "Ridisegno brand e lancio e‑commerce.",
      link: "#",
    },
    { title: "Progetto Beta", intro: "MVP in 6 settimane.", link: "#" },
    { title: "Progetto Gamma", intro: "+120% lead organici in 3 mesi.", link: "#" },
  ];
  return (
    <section id="lavori" className="py-20 bg-neutral-100/70 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Lavori selezionati</h2>
          <a href="/portfolio" className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100">
            Vedi casi studio <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((c) => (
            <a key={c.title} href={c.link} className="group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <div className="h-40 bg-neutral-200 dark:bg-neutral-800" /> {/* TODO: thumb */}
              <div className="p-4">
                <h3 className="font-semibold group-hover:underline">{c.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.intro}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== METODO =====
function Approach() {
  const steps: Step[] = [
    { k: "01", t: "Allineamento", d: "Chi siete, obiettivi, vincoli. Mini‑workshop di 60′." },
    { k: "02", t: "Prototipo", d: "Mostrare rapidamente: wireframe o POC tecnico." },
    { k: "03", t: "Costruzione", d: "Sviluppo iterativo in sprint brevi." },
    { k: "04", t: "Go‑to‑Market", d: "Lancio, misurazione, ottimizzazione." },
  ];

  return (
    <section id="metodo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Metodo, semplice</h2>
        <ol className="grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.k} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="text-xs text-neutral-500">{s.k}</div>
              <div className="font-semibold mb-2">{s.t}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ===== TEAM =====
function Team() {
  const people: Person[] = [
    { n: "Nome 1", r: "Design", l: "#" },
    { n: "Nome 2", r: "Engineering", l: "#" },
    { n: "Nome 3", r: "Marketing", l: "#" },
  ];
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Chi siamo</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {people.map((p) => (
            <a key={p.n} href={p.l} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              <div className="h-44 bg-neutral-200 dark:bg-neutral-800" /> {/* TODO: headshot */}
              <div className="p-4">
                <div className="font-medium">{p.n}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">{p.r}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== TESTIMONIALS =====
function Testimonials() {
  const quotes: Quote[] = [
    {
      q: "Hanno consegnato in fretta senza perdere qualità. Team raro.",
      a: "Nome Cognome, Ruolo @ Azienda",
    },
    {
      q: "Numeri alla mano: +120% conversione sul lancio.",
      a: "Nome Cognome, Founder",
    },
  ];
  return (
    <section className="py-20 bg-neutral-100/70 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Parole dei nostri clienti</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((t, i) => (
            <figure key={i} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <blockquote className="text-lg leading-relaxed">“{t.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== FAQ breve =====
function FAQ() {
  const faqs: FAQItem[] = [
    { q: "Come lavoriamo?", a: "In sprint bisettimanali con obiettivi chiari e demo frequenti." },
    { q: "Ticket medio?", a: "Progetti da 2 a 8 settimane. Preventivo su una call conoscitiva." },
    { q: "Dove siamo?", a: "Remoto, con base a Milano. Incontri di persona quando serve." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Domande rapide</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
              <div className="font-medium mb-2">{f.q}</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CONTATTI (no vendita aggressiva) =====
function KeepInTouch() {
  return (
    <section id="contatti" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Se ci siamo già conosciuti…</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Scrivici un messaggio con il tuo contesto o prenota 20 minuti: capiamo se possiamo aiutarti.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:ciao@tuostudio.it" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm">
            <Mail className="h-4 w-4" /> ciao@tuostudio.it
          </a>
          <a href="https://calendly.com/tuostudio/coffee" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm">
            <Calendar className="h-4 w-4" /> Prenota un caffè
          </a>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          Preferisci WhatsApp? <a href="https://wa.me/3999999999" className="underline">Scrivici qui</a>.
        </p>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm opacity-80">© {new Date().getFullYear()} TuoStudio — P.IVA 00000000000</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/onepager.pdf" className="inline-flex items-center gap-1"><Download className="h-4 w-4" /> One‑Pager</a>
          <a href="/privacy" className="opacity-80 hover:opacity-100">Privacy</a>
          <a href="https://linkedin.com" className="opacity-80 hover:opacity-100">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
