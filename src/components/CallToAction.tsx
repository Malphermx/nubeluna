import { Button } from "./ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

export function CallToAction() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/528111234567?text=Hola%20NubeLunamx%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#d4c5e8] to-[#3d4d9f]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-6">
          ¿Listo para probar el sabor del cosmos?
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto">
          Haz tu pedido ahora por WhatsApp y recibe tus donas frescas del día. ¡Envíos disponibles en Santa Catarina y zonas cercanas!
        </p>

        <Button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-12 py-8 shadow-2xl transform hover:scale-110 transition-all duration-300 mb-16"
          size="lg"
        >
          <svg
            className="w-8 h-8 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Pedir Ahora
        </Button>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <MapPin size={24} />
            </div>
            <h4 className="mb-2">Ubicación</h4>
            <p className="text-white/80">Santa Catarina, Nuevo León</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <Clock size={24} />
            </div>
            <h4 className="mb-2">Horario</h4>
            <p className="text-white/80">Lun - Dom: 9:00 AM - 8:00 PM</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <Phone size={24} />
            </div>
            <h4 className="mb-2">Contacto</h4>
            <p className="text-white/80">WhatsApp disponible</p>
          </div>
        </div>
      </div>
    </section>
  );
}
