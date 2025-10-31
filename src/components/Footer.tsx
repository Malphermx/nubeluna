import { Moon, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2a3667] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="text-white/80" size={32} />
            <h3 className="text-white">NubeLunamx</h3>
          </div>
          <p className="text-white/70 mb-4">
            Donas que orbitan en tu paladar
          </p>
          <p className="text-white/60">
            🍩 Sabores cósmicos & únicos 📍 Santa Catarina, Nuevo León
          </p>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Hecho con <Heart className="text-red-400 fill-red-400" size={16} /> por NubeLunamx © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
