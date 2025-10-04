import HeroCarousel from '../HeroCarousel';
import AboutUsBanner from '../AboutUsBanner';
import ClientsCarousel from '../ClientsCarousel';

function Home() {
  return (
    <div className="bg-contrast-background font-black-text">
      <HeroCarousel />
      <AboutUsBanner />
      <ClientsCarousel />
    </div>
  );
}

export default Home;
