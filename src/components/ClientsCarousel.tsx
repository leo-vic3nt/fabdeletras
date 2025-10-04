import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router';

function ClientsCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="bg-white"
    >
      <CarouselContent>
        <CarouselItem className="relative basis-full lg:basis-1/3 min-h-[578px] bg-[url(images/projectImages/ipiranga.jpg)] bg-center bg-cover bg-no-repeat">
          <Link to="/servicos/totens">
            <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white p-6 text-lg  font-blackcrow">Totens</span>
            </div>
          </Link>
        </CarouselItem>

        <CarouselItem className="relative basis-full lg:basis-1/3 min-h-[578px] bg-[url(images/projectImages/fachada-sao-mateus.jpg)] bg-center bg-cover bg-no-repeat">
          <Link to="/servicos/fachadas-e-letreiros">
            <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white p-6 text-lg  font-blackcrow">Fachadas e Letreiros</span>
            </div>
          </Link>
        </CarouselItem>

        <CarouselItem className="relative basis-full lg:basis-1/3 min-h-[578px] bg-[url(images/projectImages/placa-mercado-interno.jpg)] bg-center bg-cover bg-no-repeat">
          <Link to="/servicos/sinalizacao-interna">
            <div className="absolute inset-0 bg-black/60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white p-6 text-lg  font-blackcrow">Sinalização Interna</span>
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default ClientsCarousel;
