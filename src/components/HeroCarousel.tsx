import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

function HeroCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex">
            <img src="src/assets/banners/banner-hero-01-min.png" alt="ay" />
          </div>
        </CarouselItem>

        <CarouselItem>
          <h1>test</h1>
        </CarouselItem>

        <CarouselItem>
          <h1>test</h1>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;
