import { useEffect, useRef, useState } from "react";

type GooeyLogoProps = {
    className?: string;
    jitter?: number; // Intensità oscillazione (px)
    maxSep?: number; // Distanza massima tra i centri (px)
    title?: string; // Titolo accessibile
    topOffsetX?: number; // Offset X del blob superiore (negativo = sinistra)
    topOffsetY?: number; // Offset Y del blob superiore (negativo = alto)
};

export default function GooeyLogoEnhanced({
    className = "",
    jitter = 8,
    maxSep = 150,
    title = "Logo animato",
    topOffsetX = 62.11,
    topOffsetY = 110.27,
}: GooeyLogoProps) {
    const topRef = useRef<SVGGElement | null>(null);
    const bottomRef = useRef<SVGGElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    // osserva la visibilità per ridurre lavoro quando fuori viewport
    useEffect(() => {
        const svgElement = svgRef.current;
        if (!svgElement) return;
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) setIsVisible(entry.isIntersecting);
        });
        observer.observe(svgElement);
        return () => observer.disconnect();
    }, []);

    // animazione posizioni (come la tua)
    useEffect(() => {
        const svgLocal = svgRef.current;
        const blobTopLocal = topRef.current;
        const blobBottomLocal = bottomRef.current;
        if (!svgLocal || !blobTopLocal || !blobBottomLocal) return;

        const svgEl: SVGSVGElement = svgLocal;
        const blobTopEl: SVGGElement = blobTopLocal;
        const blobBottomEl: SVGGElement = blobBottomLocal;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const effectiveJitter = prefersReducedMotion ? 0 : jitter;

        const vb = (svgEl.getAttribute("viewBox") || "0 0 0 0")
            .split(/\s+/)
            .map(Number);
        const viewCenterX = vb[0] + vb[2] / 2;
        const viewCenterY = vb[1] + vb[3] / 2;

        const baseDx = topOffsetX;
        const baseDy = topOffsetY;
        const desiredDist = Math.hypot(baseDx, baseDy);
        const clampThreshold = Math.max(maxSep, desiredDist + effectiveJitter * 3);

        let startTimestamp = performance.now();
        let rafId = 0;

        function tick(now: number) {
            if (!isVisible) {
                rafId = requestAnimationFrame(tick);
                return;
            }

            const t = (now - startTimestamp) / 1000;

            // micro-jitter “organico”
            const ax = Math.sin(t * 0.9) * effectiveJitter;
            const ay = Math.cos(t * 1.1) * effectiveJitter * 0.6;
            const bx = Math.cos(t * 1.0 + 1.7) * effectiveJitter * 0.9;
            const by = Math.sin(t * 0.8 + 0.6) * effectiveJitter * 0.65;

            let Ax = viewCenterX + ax;
            let Ay = viewCenterY + ay;
            let Bx = viewCenterX + bx + topOffsetX;
            let By = viewCenterY + by + topOffsetY;

            // Clamp solo se supera la soglia calcolata
            const dx = Bx - Ax;
            const dy = By - Ay;
            const dist = Math.hypot(dx, dy);
            if (dist > clampThreshold) {
                const k = (dist - clampThreshold) / dist;
                Ax += dx * k * 0.5;
                Ay += dy * k * 0.5;
                Bx -= dx * k * 0.5;
                By -= dy * 0.5 * k;
            }

            blobBottomEl.setAttribute(
                "transform",
                `translate(${Ax - viewCenterX}, ${Ay - viewCenterY})`
            );
            blobTopEl.setAttribute(
                "transform",
                `translate(${Bx - viewCenterX}, ${By - viewCenterY})`
            );

            rafId = requestAnimationFrame(tick);
        }

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [jitter, maxSep, topOffsetX, topOffsetY, isVisible]);

    return (
        <div className={"relative grid place-items-center " + className}>
            {/* keyframes inline per l’appear liquido */}
            <style>{`
        @keyframes liquidIn {
          0% { opacity: 0; transform: scale(0.94); filter: blur(12px); }
          60% { opacity: 1; transform: scale(1.02); filter: blur(2px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        /* rispetto preferenze utente */
        @media (prefers-reduced-motion: reduce) {
          svg[data-anim="liquid-in"] { animation: none !important; filter: none !important; }
        }
      `}</style>

            <svg
                ref={svgRef}
                data-anim="liquid-in"
                viewBox="-40 -40 780 620"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={title}
                className="block w-full h-auto"
                style={{
                    overflow: "visible",
                    animation: "liquidIn 900ms cubic-bezier(.22,.8,.24,1) both",
                }}
                preserveAspectRatio="xMidYMid meet"
            >
                <title>{title}</title>
                <defs>
                    {/* Turbolenza + Displacement per effetto “liquido” */}
                    <filter id="liquidGoo" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000">
                        {/* Blur ridotto per mantenere definizione */}
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -12"
                            result="goo"
                        />
                        <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" seed="3" result="noise">
                            <animate attributeName="baseFrequency" dur="7s" values="0.007;0.011;0.007" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="goo" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" result="distorted">
                            <animate attributeName="scale" dur="9s" values="8;12;8" repeatCount="indefinite" />
                        </feDisplacementMap>
                        <feBlend in="SourceGraphic" in2="distorted" mode="normal" />
                    </filter>

                    {/* Gradiente A - statico */}
                    <linearGradient id="gradA" x1="-38.5" y1="53.5" x2="708.5" y2="432.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#87C7C2" />
                        <stop offset="0.394231" stopColor="#284082" />
                        <stop offset="0.593695" stopColor="#0F1C71" />
                        <stop offset="1" stopColor="#F15AA0" />
                    </linearGradient>

                    {/* Gradiente B - statico */}
                    <linearGradient id="gradB" x1="22.5" y1="340" x2="506" y2="163.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE5DAF" />
                        <stop offset="0.274038" stopColor="#2D1B73" />
                        <stop offset="0.611048" stopColor="#162676" />
                        <stop offset="1" stopColor="#8ED0C7" />
                    </linearGradient>

                    {/* glow morbido ma più definito */}
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="glow" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>


                {/* gruppo con goo + liquid */}
                <g filter="url(#liquidGoo)">
                    {/* Blob inferiore */}
                    <g ref={bottomRef} filter="url(#softGlow)">
                        <path
                            d="M75.6534 2.10818C2.41341 22.8382 -28.4765 188.188 32.3535 294.568C37.3535 303.308 83.6935 382.358 137.473 378.718C173.823 376.258 184.423 338.018 212.463 339.968C255.413 342.958 251.293 434.198 310.663 482.648C380.163 539.358 542.173 541.908 628.213 453.128C728.093 350.068 675.633 175.488 594.123 141.838C538.663 118.948 503.993 175.428 409.553 174.808C234.213 173.668 161.773 -22.2718 75.6634 2.09817Z"
                            fill="url(#gradA)"
                        />
                    </g>

                    {/* Blob superiore (multiply) */}
                    <g ref={topRef} style={{ mixBlendMode: "multiply" as const }} filter="url(#softGlow)">
                        <path
                            d="M516.161 246.124C552.591 203.814 477.631 46.1938 340.581 8.56378C211.121 -26.9762 54.4607 52.3038 11.6307 168.714C-51.5493 340.424 160.301 518.494 223.951 499.504C279.161 483.034 225.251 317.624 324.921 261.754C399.441 219.974 486.541 280.504 516.161 246.124Z"
                            fill="url(#gradB)"
                        />
                    </g>
                </g>
            </svg>
        </div >
    );
}
