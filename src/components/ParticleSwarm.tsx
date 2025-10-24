import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
}

export default function ParticleSwarm() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const animationFrameRef = useRef<number | undefined>(undefined);

    // Parametri configurabili
    const PARTICLE_COUNT = 150;
    const WANDER_SPEED = 0.8; // Velocità di vagabondaggio
    const MOUSE_INFLUENCE_RADIUS = 200; // Raggio di influenza del mouse
    const MOUSE_ATTRACTION_STRENGTH = 0.15; // Forza di attrazione verso il mouse

    // Inizializza le particelle con velocità casuali
    const initParticles = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
            const angle = Math.random() * Math.PI * 2;
            const speed = WANDER_SPEED * (0.5 + Math.random() * 0.5);
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                baseVx: Math.cos(angle) * speed,
                baseVy: Math.sin(angle) * speed,
            };
        });
    };

    // Animation loop
    const animate = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Disegna glow del cursore del mouse
        const cursorGlowSize = 60;
        const cursorGradient = ctx.createRadialGradient(
            mouseRef.current.x, mouseRef.current.y, 0,
            mouseRef.current.x, mouseRef.current.y, cursorGlowSize
        );
        cursorGradient.addColorStop(0, 'hsla(270, 100%, 70%, 0.15)');
        cursorGradient.addColorStop(0.5, 'hsla(270, 100%, 70%, 0.08)');
        cursorGradient.addColorStop(1, 'hsla(270, 100%, 70%, 0)');

        ctx.fillStyle = cursorGradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, cursorGlowSize, 0, Math.PI * 2);
        ctx.fill();

        // Aggiorna e disegna particelle
        particlesRef.current.forEach((particle, index) => {
            // Calcola la distanza dal mouse
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Le particelle vagano liberamente
            // Aggiungi un po' di casualità al movimento per un effetto più organico
            particle.baseVx += (Math.random() - 0.5) * 0.05;
            particle.baseVy += (Math.random() - 0.5) * 0.05;

            // Limita la velocità di vagabondaggio
            const baseSpeed = Math.sqrt(particle.baseVx ** 2 + particle.baseVy ** 2);
            if (baseSpeed > WANDER_SPEED) {
                particle.baseVx = (particle.baseVx / baseSpeed) * WANDER_SPEED;
                particle.baseVy = (particle.baseVy / baseSpeed) * WANDER_SPEED;
            }

            // Se il mouse è vicino, attrai le particelle
            if (distance < MOUSE_INFLUENCE_RADIUS) {
                const influenceStrength = 1 - (distance / MOUSE_INFLUENCE_RADIUS);
                const angle = Math.atan2(dy, dx);

                particle.vx = particle.baseVx + Math.cos(angle) * MOUSE_ATTRACTION_STRENGTH * influenceStrength * 10;
                particle.vy = particle.baseVy + Math.sin(angle) * MOUSE_ATTRACTION_STRENGTH * influenceStrength * 10;
            } else {
                // Movimento libero quando il mouse è lontano
                particle.vx = particle.baseVx;
                particle.vy = particle.baseVy;
            }

            // Aggiorna posizione
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around: le particelle riappaiono dall'altro lato
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            // Calcola effetti visivi in base alla distanza dal mouse
            const isNearMouse = distance < MOUSE_INFLUENCE_RADIUS;
            const influenceFactor = isNearMouse ? (1 - distance / MOUSE_INFLUENCE_RADIUS) : 0;

            // Dimensione: più grande quando vicino al mouse
            const baseSize = 2;
            const size = baseSize + influenceFactor * 3;

            // Alpha: più luminoso quando vicino al mouse
            const baseAlpha = 0.3;
            const alpha = baseAlpha + influenceFactor * 0.5;

            // Colore: viola intenso quando vicino al mouse, grigio-blu quando lontano
            const hue = isNearMouse ? 270 : 220; // 270 = viola, 220 = blu
            const saturation = isNearMouse ? 80 + influenceFactor * 20 : 30;
            const lightness = isNearMouse ? 60 + influenceFactor * 20 : 50;

            // Disegna glow quando vicino al mouse
            if (isNearMouse && influenceFactor > 0.3) {
                const glowSize = size + influenceFactor * 8;
                const glowAlpha = influenceFactor * 0.3;

                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, glowSize
                );
                gradient.addColorStop(0, `hsla(270, 100%, 70%, ${glowAlpha})`);
                gradient.addColorStop(1, 'hsla(270, 100%, 70%, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
                ctx.fill();
            }

            // Disegna particella principale
            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            ctx.fill();

            // Connessioni tra particelle vicine al mouse
            if (isNearMouse) {
                particlesRef.current.forEach((other, otherIndex) => {
                    if (index >= otherIndex) return; // Evita duplicati

                    const dx2 = particle.x - other.x;
                    const dy2 = particle.y - other.y;
                    const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    const otherDistance = Math.sqrt(
                        (mouseRef.current.x - other.x) ** 2 +
                        (mouseRef.current.y - other.y) ** 2
                    );
                    const otherNearMouse = otherDistance < MOUSE_INFLUENCE_RADIUS;

                    // Connetti solo se entrambe le particelle sono vicine al mouse e tra loro
                    if (otherNearMouse && dist < 120 && dist > 0) {
                        const lineAlpha = influenceFactor * 0.25 * (1 - dist / 120);
                        ctx.strokeStyle = `hsla(270, 80%, 70%, ${lineAlpha})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });
            }
        });

        animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Setup
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}

