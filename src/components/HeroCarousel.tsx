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
        <CarouselItem
          className="w-full h-[915px] lg:h-[769px] bg-[url(src/assets/banners/banner-hero-mobile-01.png)] lg:bg-[url(src/assets/banners/banner-hero-01-min.png)] 
          bg-no-repeat bg-cover bg-center flex relative"
        >
          <div className="lg:pt-20 pt-10 flex flex-col gap-5 absolute left-0 right-0 lg:right-1/2 lg:top-1/4 2xl:right-1/3 2xl:top-1/5 w-[clamp(300px,80%,500px)] mx-auto">
            <h1 className="font-blackcrow text-white lg:text-4xl text-2xl  w-fit font-bold">Estrutura</h1>
            <hr className="w-[25ch]" />
            <p className="text-white w-[30ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, velit a tincidunt dictum, lacus
              sapien aliquam eros, non tristique libero erat at enim. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Etiam nec orci vitae magna dictum, tempus suscipit enim,
              accumsan in nulla.
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className="h-[915px] lg:h-[769px] bg-[url(src/assets/banners/banner-hero-mobile-02.png)] lg:bg-[url(src/assets/banners/banner-hero-02-min.png)] bg-no-repeat bg-cover bg-center relative">
          <div className="lg:pt-20 pt-10 flex flex-col gap-5 absolute left-0 right-0  lg:right-1/2 2xl:right-1/3 w-[clamp(300px,80%,500px)] mx-auto">
            <h1 className="font-blackcrow text-white lg:text-4xl text-2xl w-fit font-bold">Projetos</h1>
            <hr className="w-[25ch]" />
            <p className="text-white w-[30ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, velit a tincidunt dictum, lacus
              sapien aliquam eros, non tristique libero erat at enim. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Etiam nec orci vitae magna dictum, tempus suscipit enim,
              accumsan in nulla.
            </p>
          </div>
        </CarouselItem>

        <CarouselItem
          className="w-full h-[915px] lg:h-[769px] bg-[url(src/assets/banners/banner-hero-mobile-03.png)] lg:bg-[url(src/assets/banners/banner-hero-03-min.png)] 
          bg-no-repeat bg-cover bg-center flex relative"
        >
          <div className="lg:pt-20 pt-10 flex flex-col gap-5 absolute left-0 right-0 lg:right-2/3 lg:top-1/5 2xl:right-1/2 2xl:top-1/4  w-[clamp(200px,80%,500px)] 2xl:w-[clamp(200px,80%,500px)] lg:w-[400px] mx-auto">
            <h1 className="font-blackcrow text-white 2xl:text-4xl text-2xl font-bold">
              <span className="font-thin">
                Soluções <span className="font-bold">personalizadas</span> em comunicação visual!
              </span>
            </h1>
            <hr />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, velit a tincidunt dictum, lacus
              sapien aliquam eros, non tristique libero erat at enim. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Etiam nec orci vitae magna dictum, tempus suscipit enim,
              accumsan in nulla.
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default HeroCarousel;
