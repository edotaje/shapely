import "./AuroraBackground.css";

export function AuroraBackground({ className = "" }: { className?: string }) {
    return (
        <div className={`aurora-bg ${className}`} aria-hidden="true">
            <div className="layer l1" />
            <div className="layer l2" />
            <div className="layer l3" />
            <div className="vignette"></div>
            <div className="overlay-dark"></div>
            <div className="grain" />
        </div>
    );
}

import "./AuroraBackground.css";

export function Background({ className = "" }: { className?: string }) {
    return (
        <div className={`aurora-bg ${className}`} aria-hidden="true">
            <div className="layer l1" />
            <div className="layer l2" />
            <div className="layer l3" />
            <div className="vignette"></div>
            <div className="overlay-dark"></div>
            <div className="grain" />
        </div>
    );
}
