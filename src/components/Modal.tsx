import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    // Chiudi il modal premendo ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Blocca lo scroll del body quando il modal è aperto
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Overlay con sfocatura */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            {/* Contenuto del modal */}
            <div
                className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Bottone di chiusura */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                    aria-label="Chiudi modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Contenuto passato come children */}
                <div className="p-8">
                    {children}
                </div>
                {/* Gradient border interno */}
                <div className="gradient-border-inner-2"></div>
            </div>
        </div>
    );
}

