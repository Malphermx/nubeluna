import { Moon, Sparkles, Heart } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#8b7fb8] to-[#b8a8d8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Nuestra Historia</h2>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Moon className="text-white" size={32} />
            </div>
            <h3 className="text-white mb-4">Inspiración Nocturna</h3>
            <p className="text-white/80">
              Cada dona es creada con la magia de la noche, inspirada en los misterios del cosmos y la dulzura de los sueños.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Sparkles className="text-white" size={32} />
            </div>
            <h3 className="text-white mb-4">Sabores Únicos</h3>
            <p className="text-white/80">
              Desde sabores clásicos hasta combinaciones cósmicas que nunca has probado. Cada bocado es una aventura celestial.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-white mb-4">Hecho con Amor</h3>
            <p className="text-white/80">
              Cada dona es preparada con dedicación y pasión en Santa Catarina, Nuevo León, para brindarte la mejor experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
