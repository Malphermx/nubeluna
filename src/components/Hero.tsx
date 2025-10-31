import { Sparkles, Cloud, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/528111234567?text=Hola%20NubeLunamx%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido", "_blank");
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3d4d9f] via-[#5e5ea8] to-[#8b7fb8]">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <Sparkles className="text-white/60" size={Math.random() * 10 + 8} />
          </div>
        ))}
      </div>

      {/* Floating clouds background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute cloud-float"
            style={{
              left: `${-20 + Math.random() * 120}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Cloud 
              className="text-white/20" 
              size={60 + Math.random() * 100} 
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      {/* Diagonal overlay for modern split design */}
      <div className="absolute inset-0 diagonal-split" />

      {/* Donut image section - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden donut-side">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#3d4d9f]/30 to-[#3d4d9f]/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756362398711-92d21d917aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRvbnV0cyUyMGFzc29ydGVkfGVufDF8fHx8MTc2MTY4OTMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Delicious donuts"
          className="w-full h-full object-cover opacity-60 scale-110 animate-slow-zoom"
        />
      </div>

      {/* Content - left side */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left space-y-6 py-12">
          {/* Logo with Moon and Clouds */}
          <div className="animate-logo-entrance">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <Cloud className="text-white drop-shadow-2xl animate-cloud-bounce" size={40} strokeWidth={2} />
              <Moon className="text-yellow-200 drop-shadow-2xl animate-moon-glow" size={50} strokeWidth={2} fill="currentColor" />
              <Cloud className="text-white drop-shadow-2xl animate-cloud-bounce-delayed" size={40} strokeWidth={2} />
            </div>
            
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl tracking-wider drop-shadow-2xl mb-2">
              NubeLuna
            </h1>
            
            {/* Subtitle clouds */}
            <div className="flex justify-center lg:justify-start gap-3 opacity-70">
              <Cloud className="text-white animate-float-slow" size={24} strokeWidth={1.5} />
              <Cloud className="text-white animate-float-medium" size={20} strokeWidth={1.5} />
              <Cloud className="text-white animate-float-fast" size={22} strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Highlighted tagline */}
          <div className="space-y-3">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-3xl border-2 border-white/30 shadow-2xl">
              <p className="text-white text-xl md:text-3xl leading-relaxed">
                🍩 <span className="text-yellow-200">Donas que orbitan</span>
                <br />
                <span className="text-white">en tu paladar</span>
              </p>
            </div>
            
            <p className="text-white/90 text-lg md:text-xl">
              ✨ Sabores cósmicos & únicos
            </p>
            
            <p className="text-white/80">
              📍 Santa Catarina, Nuevo León
            </p>
          </div>
          
          <div className="pt-2">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-5 shadow-2xl transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hacer Pedido por WhatsApp
            </Button>
          </div>
        </div>

        {/* Empty column for spacing on large screens */}
        <div className="hidden lg:block" />
      </div>

      <style>{`
        @keyframes logo-entrance {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(-50px);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes cloud-bounce {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-15px) scale(1.05);
          }
          50% {
            transform: translateY(-5px) scale(0.95);
          }
          75% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes moon-glow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(255, 237, 160, 0.8));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 20px rgba(255, 237, 160, 1));
          }
        }

        @keyframes cloud-float {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(100vw) translateY(-20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes slow-zoom {
          0%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        
        .animate-logo-entrance {
          animation: logo-entrance 1.5s ease-out;
        }

        .animate-cloud-bounce {
          animation: cloud-bounce 3s ease-in-out infinite;
        }

        .animate-cloud-bounce-delayed {
          animation: cloud-bounce 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-moon-glow {
          animation: moon-glow 4s ease-in-out infinite;
        }

        .cloud-float {
          animation: cloud-float linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }

        .diagonal-split {
          background: linear-gradient(
            135deg,
            #3d4d9f 0%,
            #5e5ea8 50%,
            transparent 50%
          );
          opacity: 0.3;
        }

        .donut-side {
          clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
        }

        @media (max-width: 1024px) {
          .donut-side {
            clip-path: none;
            opacity: 0.3;
          }
          
          .diagonal-split {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
