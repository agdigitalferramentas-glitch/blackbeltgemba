import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  "nkxiOrYzKps",
  "wJQeUW8ZQQA",
  "cnA_jrJDcRU",
  "YhS3Fz6iEYk",
  "mCfsnekzJ0o",
  "VRcPrcZigHM",
];

const TestimonialsSection = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-navy text-hero-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground text-center mb-3 sm:mb-4">
          O que dizem quem já <span className="gold-text">passou pelo método</span>
        </h2>
        <p className="text-hero-foreground/70 text-sm sm:text-base text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          Depoimentos reais de profissionais que aplicaram o método Gemba e transformaram suas carreiras.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {videos.map((id) => (
            <div
              key={id}
              className="relative aspect-video rounded-xl overflow-hidden border border-gold/15 bg-navy-light/40 group cursor-pointer"
              onClick={() => setPlaying(id)}
            >
              {playing === id ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                  title="Depoimento"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                    alt="Depoimento em vídeo"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="gold-gradient w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-navy fill-navy ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
