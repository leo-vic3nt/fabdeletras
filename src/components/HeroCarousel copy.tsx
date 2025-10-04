import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
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
          <div className="pt-8 pb-3 h-fit bg-contrast-background">
            <div className="bg-[url(src/assets/banners/banner-hero-mobile-01.png)]  lg:bg-[url(src/assets/banners/banner-hero-01-min.png)]  bg-no-repeat bg-center h-[900px] lg:h-[700px] flex ">
              <div className="container mx-auto pt-20 items-center lg:items-baseline flex flex-col gap-5">
                <h1 className="font-blackcrow text-white lg:text-4xl text-2xl  w-fit font-bold">Estrutura</h1>
                <hr className="w-[25ch]" />
                <p className="text-white w-[30ch]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, velit a tincidunt dictum,
                  lacus sapien aliquam eros, non tristique libero erat at enim. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas. Etiam nec orci vitae magna dictum, tempus
                  suscipit enim, accumsan in nulla.
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default HeroCarousel;
