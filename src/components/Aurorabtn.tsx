import * as React from "react";

type Size = "sm" | "md" | "lg";

export type AuroraGlassButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    size?: Size;
};

function sizeClasses(size: Size) {
    switch (size) {
        case "sm": return "text-sm px-4 py-2 rounded-xl";
        case "lg": return "text-base px-7 py-3.5 rounded-2xl";
        case "md":
        default: return "text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-2xl";
    }
}

/**
 * Pulsante in glassmorphism con aura "aurora" in conic-gradient.
 * Palette dai tuoi SVG: #87C7C2 #284082 #0F1C71 #F15AA0 #FE5DAF #2D1B73 #162676 #8ED0C7
 */
export const AuroraGlassButton = React.forwardRef<HTMLButtonElement, AuroraGlassButtonProps>(
    ({ className = "", loading = false, leftIcon, rightIcon, size = "md", children, disabled, ...props }, ref) => {
        const isDisabled = disabled || loading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                className={[
                    "relative isolate inline-flex items-center justify-center gap-2",
                    sizeClasses(size),
                    // glass base
                    "backdrop-blur-xl bg-white/5 ring-1 ring-white/15 text-white",
                    "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.6)]",
                    // interactions
                    "transition duration-300 will-change-transform",
                    "hover:bg-white/8 hover:ring-white/25 hover:-translate-y-[1px]",
                    "active:translate-y-0",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60",
                    "disabled:opacity-55 disabled:cursor-not-allowed",
                    className,
                ].join(" ")}
                {...props}
            >
                {/* Aura “aurora” dietro il vetro */}
                <span
                    aria-hidden
                    className={[
                        "pointer-events-none absolute -inset-px -z-10 rounded-[inherit] opacity-80",
                        "mix-blend-screen blur-2xl",
                        // conic gradient coi tuoi colori
                        "[background:conic-gradient(from_var(--ang,0deg)_at_50%_50%,",
                        "#F15AA0_0deg_70deg,#284082_70deg_150deg,#162676_150deg_230deg,",
                        "#8ED0C7_230deg_290deg,#FE5DAF_290deg_360deg)]",
                        // rotazione lenta + rispetto ridotta animazione
                        "motion-safe:animate-[spin_26s_linear_infinite] motion-reduce:animate-none",
                    ].join("")}
                    style={{} as React.CSSProperties}
                />

                {/* Glow sottile interno (border glow) */}
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10"
                />

                {/* Sheen / riflesso superiore */}
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/15 via-white/5 to-transparent mix-blend-overlay"
                />

                {/* Contenuto */}
                {leftIcon && (
                    <span className="shrink-0 opacity-90">
                        {leftIcon}
                    </span>
                )}

                <span className={loading ? "opacity-0" : ""}>{children}</span>

                {rightIcon && (
                    <span className="shrink-0 opacity-90">
                        {rightIcon}
                    </span>
                )}

                {/* Spinner quando loading */}
                {loading && (
                    <span
                        className={[
                            "absolute inset-0 grid place-items-center",
                            "motion-safe:[&>span]:animate-spin motion-reduce:[&>span]:animate-none",
                        ].join(" ")}
                    >
                        <span className="h-5 w-5 border-2 border-white/30 border-t-white/80 rounded-full" />
                    </span>
                )}
            </button>
        );
    }
);

AuroraGlassButton.displayName = "AuroraGlassButton";
