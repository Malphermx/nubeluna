import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

const products = [
  {
    name: "Galaxia de Fresa",
    description: "Glaseado rosa con estrellas comestibles",
    image: "https://images.unsplash.com/photo-1612531845778-d1ab85b4bde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBkb251dCUyMHBpbmt8ZW58MXx8fHwxNzYxNjc5MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Nebulosa de Chocolate",
    description: "Chocolate cósmico con chispas de colores",
    image: "https://images.unsplash.com/photo-1706466644871-7a1b6ca9f18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRvbnV0cyUyMHBhc3RlbHxlbnwxfHx8fDE3NjE2NzkzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Órbita de Vainilla",
    description: "Glaseado clásico con toque celestial",
    image: "https://images.unsplash.com/photo-1756362398711-92d21d917aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGF6ZWQlMjBkb251dHMlMjBhc3NvcnRlZHxlbnwxfHx8fDE3NjE2NDE3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Luna de Caramelo",
    description: "Dulce caramelo salado que orbita en tu paladar",
    image: "https://images.unsplash.com/photo-1706466644871-7a1b6ca9f18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRvbnV0cyUyMHBhc3RlbHxlbnwxfHx8fDE3NjE2NzkzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Estrella de Matcha",
    description: "Té verde japonés con glaseado de nubes",
    image: "https://images.unsplash.com/photo-1612531845778-d1ab85b4bde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBkb251dCUyMHBpbmt8ZW58MXx8fHwxNzYxNjc5MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Constelación de Nutella",
    description: "Relleno cremoso de Nutella con destellos dulces",
    image: "https://images.unsplash.com/photo-1756362398711-92d21d917aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGF6ZWQlMjBkb251dHMlMjBhc3NvcnRlZHxlbnwxfHx8fDE3NjE2NDE3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/528111234567?text=Hola%20NubeLunamx%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#b8a8d8] to-[#d4c5e8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#3d4d9f] mb-4">Nuestros Sabores Cósmicos</h2>
          <p className="text-[#5e5ea8] max-w-2xl mx-auto mb-6">
            Descubre nuestra selección de donas artesanales con sabores que te transportarán a otro mundo
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hacer Pedido por WhatsApp
          </button>
        </div>

        <div className="relative px-12 md:px-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className={`transition-all duration-500 cursor-pointer ${
                      current === index
                        ? "scale-110 opacity-100 z-10"
                        : "scale-75 opacity-50"
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-[#8b7fb8]/30 hover:border-[#8b7fb8]/60 transition-all duration-300">
                      <div className="aspect-square overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-[#3d4d9f] mb-2">{product.name}</h3>
                        <p className="text-[#5e5ea8]">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation Buttons */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7fb8] to-[#b8a8d8] shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="text-white" size={28} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#8b7fb8] to-[#b8a8d8] shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="text-white" size={28} />
            </button>
          </Carousel>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-3 bg-[#8b7fb8]"
                  : "w-3 h-3 bg-[#8b7fb8]/30 hover:bg-[#8b7fb8]/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl bg-gradient-to-br from-[#8b7fb8] to-[#b8a8d8] border-4 border-white/20">
          {selectedProduct && (
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center space-y-4 pb-4">
                <h2 className="text-white">{selectedProduct.name}</h2>
                <p className="text-white/90 text-xl">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
