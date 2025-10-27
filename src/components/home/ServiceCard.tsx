interface ServiceCardProps {
    title: string;
    description: string;
    tags: string[];
}

export default function ServiceCard({ title, description, tags }: ServiceCardProps) {
    return (
        <div className="service-card-gradient">
            {/* Gradient border interno */}
            <div className="gradient-border-inner"></div>

            {/* Contenuto card */}
            <div className="relative z-10 flex flex-col w-full">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4 text-white tracking-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed font-light text-base">
                    {description}
                </p>

                {/* Tags container */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-purple-500/20 text-purple-200/80 text-xs font-medium backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

