import HeroCarousel from '../HeroCarousel';
import AboutUsBanner from '../AboutUsBanner';
import ClientsCarousel from '../ClientsCarousel';
import LogosCarousel from '../LogosCarousel';
import MessageSender from '../MessageSender';

function Home() {
  return (
    <div className="bg-contrast-background font-black-text">
      <HeroCarousel />
      <AboutUsBanner />
      <ClientsCarousel />
      <LogosCarousel />
      <MessageSender />
    </div>
  );
}

export default Home;
