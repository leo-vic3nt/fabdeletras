import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const logos = [
  'images/logosClientes/dunlop.svg',
  'images/logosClientes/magalu.png',
  'images/logosClientes/Goodyear.png',
  'images/logosClientes/mcdonalds.png',
  'images/logosClientes/mix-mateus.png',
  'images/logosClientes/Retangulo-42.svg',
  'images/logosClientes/simplifique.svg',
  'images/logosClientes/smart-fit.svg',
  'images/logosClientes/vibra.png',
  'images/logosClientes/wr-engenharia.svg',
];

function LogosCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
        slidesToScroll: 1,
      }}
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="bg-white "
    >
      <CarouselContent>
        {logos.map((logo, i) => (
          <CarouselItem key={i} className="basis-1/2 lg:basis-1/3 2xl:basis-1/6 flex items-center justify-center py-8">
            <img src={logo} alt={`Logo ${i + 1}`} className="h-20 object-contain" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default LogosCarousel;
