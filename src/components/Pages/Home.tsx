import { Link } from 'react-router';
import HeroCarousel from '../HeroCarousel';

function Home() {
  return (
    <div className="bg-contrast-background font-black-text">
      <HeroCarousel />

      <div className="bg-white py-16 px-3">
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-evenly container mx-auto">
          <div className="max-w-96 flex flex-col gap-4">
            <h1 className="font-blackcrow text-3xl text-center text-[#dd3501]">
              Sobre<span className="font-thin"> nós</span>
            </h1>
            <p className="text-center lg:text-left">
              Há 30 anos, a Artplac é sinônimo de excelência em comunicação visual, identidade corporativa e projetos de
              engenharia de grande escala. Nossa história começou em 1994, e desde então, nos consolidamos como um dos
              principais fornecedores de comunicação visual corporativa do Brasil. Somos uma empresa inovadora, sempre
              buscando novos processos, materiais, técnicas e tecnologias.
            </p>
            <Link
              to="sobre-nos"
              className="mx-auto lg:mx-0 border border-[#dd3501] text-[#dd3501] rounded-sm px-1.5 py-3 w-1/2 text-center hover:bg-[#dd3501] transition hover:border-white hover:text-white"
            >
              Saiba mais
            </Link>
          </div>
          <img src="images/about-image.png" className="w-2xs lg:w-96" />
        </div>
      </div>
    </div>
  );
}

export default Home;
