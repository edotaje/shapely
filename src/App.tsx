
import Animatedlogo from './components/animatedlogo'
import { AuroraBackground } from './components/AuroraBackground/AuroraBackground'
import { AuroraGlassButton } from './components/Aurorabtn'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AuroraBackground />
      {/* Contenuto principale */}
      <div className="w-full max-w-4xl px-4 z-10">
        {/* Nav */}
        <nav className="absolute top-0 right-0 p-4 text-white/60">
          <Link to="/wireframe" className="hover:underline">We are shaping our website...</Link>
        </nav>
        {/* Contenuto principale */}
        <div className="card bg-[rgba(40,40,55,0.30)] backdrop-blur-xl rounded-xl shadow-xl p-8 border border-white/10">
          {/* Logo */}
          <div className="mb-12 flex justify-center flex-row items-center gap-4">
            <div className="w-25">
              <Animatedlogo className="w-full" />
            </div>
            <h1 className="text-4xl font-bold text-white liquid-text-in">Shapely</h1>
          </div>
          <div className="text-center">
            {/* Titolo principale */}
            <h1 className="text-2xl font-medium text-white mb-4 liquid-text-in">
              We shape your ideas
            </h1>

            {/* Sottotitolo */}
            <p className="text-md text-[#b0b0b0] mb-8 mx-auto liquid-text-in">
              Diamo forma a tutti i progetti rimasti in stand-by nella tua azienda.
              <br /> Se pensi che possiamo aiutarti, contattaci.
            </p>

            {/* Pulsante contattaci */}
            <AuroraGlassButton className="liquid-text-in" onClick={() => window.location.href = "mailto:info@shapely.it"}>
              info@shapely.it
            </AuroraGlassButton>

          </div>
        </div>


      </div>
    </div>
  )
}

export default App
