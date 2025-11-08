
export default function Footer() {

    return (
        <footer className="py-8 md:py-10 border-t border-[#222]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Container principale - flex column su mobile, row su desktop */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                    {/* Copyright - centrato su mobile, allineato a sinistra su desktop */}
                    <div className="text-xs sm:text-sm opacity-80 text-center md:text-left leading-relaxed">
                        © {new Date().getFullYear()} Share Me di Edoardo Tajè
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"> — </span>
                        <span className="text-xs">P.IVA 13381640963</span>
                    </div>

                    {/* Links - centrati su mobile, wrappano se necessario */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                        <a
                            href="https://btindustries.it"
                            className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
                        >
                            Chi siamo
                        </a>
                        <span className="opacity-30 hidden sm:inline">•</span>
                        <a
                            href="/privacypolicy"
                            className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
                        >
                            Privacy Policy
                        </a>
                        <span className="opacity-30 hidden sm:inline">•</span>
                        <a
                            href="/cookiepolicy"
                            className="opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
                        >
                            Cookie Policy
                        </a>
                    </div>
                </div>

                {/* Made with love - sempre centrato */}
                <div className="mt-6 md:mt-4 flex items-center justify-center">
                    <a
                        href="https://btindustries.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs hover:bg-white/20 transition-all cursor-pointer"
                    >
                        💜 Made with love by BT Industries
                    </a>
                </div>
            </div>

        </footer>
    );
}

