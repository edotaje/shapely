import { Coffee } from "lucide-react";
import logo from "../../assets/shapelynobg.png";

export default function Navbar() {
    return (
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
            <div className="flex items-center gap-2 ">

                <div className=" flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
                    <img src={logo} alt="Shapely" className="w-10 h-10 object-contain" />
                    <h2 className="text-white font-semibold text-xl tracking-wide gradient-text">Shapely</h2>
                </div>

            </div>
            {/*
            <a href="mailto:info@shapely.it" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all">
                <Coffee className="h-4 w-4" /> Prenota un caffè
            </a>
            */}
        </nav>
    );
}

