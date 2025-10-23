import { Link } from 'react-router-dom';
import { AuroraBackground } from '../components/AuroraBackground/AuroraBackground';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <AuroraBackground />
            <div className="w-full max-w-2xl px-4 z-10">
                <div className="card bg-[rgba(40,40,55,0.30)] backdrop-blur-xl rounded-xl shadow-xl p-12 border border-white/10 text-center">
                    <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                    <h2 className="text-2xl font-medium text-white mb-4">
                        Pagina non trovata
                    </h2>
                    <p className="text-md text-[#b0b0b0] mb-8">
                        La pagina che stai cercando non esiste o è stata spostata.
                    </p>
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300"
                    >
                        Torna alla Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

