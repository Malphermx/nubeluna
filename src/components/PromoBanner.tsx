import { Sparkles, Gift, Zap } from "lucide-react";

const promos = [
  {
    icon: Gift,
    text: "🎉 Miércoles 2x1 en todas nuestras donas",
  },
  {
    icon: Zap,
    text: "⚡ Docena especial: 12 donas por el precio de 10",
  },
  {
    icon: Sparkles,
    text: "✨ Pedidos +$300: Envío GRATIS en Santa Catarina",
  },
];

export function PromoBanner() {
  // Duplicamos el contenido para el efecto infinito
  const repeatedPromos = [...promos, ...promos, ...promos];

  return (
    <section className="relative py-6 bg-gradient-to-r from-[#ff6b9d] via-[#c44569] to-[#ff6b9d] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-slide-diagonal">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border-2 border-white/30 rotate-45"
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 25) % 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scrolling content */}
      <div className="relative z-10">
        <div className="marquee-container">
          <div className="marquee-content">
            {repeatedPromos.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <div key={index} className="marquee-item">
                  <Icon className="text-white" size={28} strokeWidth={2.5} />
                  <span className="text-white text-xl md:text-2xl mx-4">
                    {promo.text}
                  </span>
                  <Sparkles className="text-yellow-300" size={24} />
                  <span className="text-white/50 text-3xl mx-8">•</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-diagonal {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-slide-diagonal {
          animation: slide-diagonal 20s linear infinite;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
