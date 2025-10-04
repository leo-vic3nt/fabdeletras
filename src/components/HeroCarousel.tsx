import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

function HeroCarousel() {
  return (
    <Carousel >
      <CarouselContent>
        <CarouselItem>
          <div>
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
