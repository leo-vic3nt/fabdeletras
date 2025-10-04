import HeroCarousel from '../HeroCarousel';
import AboutUsBanner from '../AboutUsBanner';
import ClientsCarousel from '../ClientsCarousel';
import LogosCarousel from '../LogosCarousel';

function Home() {
  return (
    <div className="bg-contrast-background font-black-text">
      <HeroCarousel />
      <AboutUsBanner />
      <ClientsCarousel />
      <LogosCarousel />
    </div>
  );
}

export default Home;
