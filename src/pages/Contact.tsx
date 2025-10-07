import { AuroraGlassButton } from '../components/Aurorabtn'

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-white mb-6">Contatti</h1>
                <p className="text-[#b0b0b0] mb-6">
                    Hai un progetto? Scrivici, saremo felici di parlarne.
                </p>
                <AuroraGlassButton onClick={() => window.location.href = 'mailto:info@shapely.it'}>
                    info@shapely.it
                </AuroraGlassButton>
            </div>
        </div>
    )
}


