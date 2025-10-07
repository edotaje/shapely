import Animatedlogo from '../components/animatedlogo'

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-3xl">
                <div className="mb-8 flex justify-center items-center gap-4">
                    <div className="w-24">
                        <Animatedlogo className="w-full" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">About</h1>
                </div>
                <p className="text-[#b0b0b0]">
                    Shapely è un team che dà forma a idee e progetti digitali.
                </p>
            </div>
        </div>
    )
}


