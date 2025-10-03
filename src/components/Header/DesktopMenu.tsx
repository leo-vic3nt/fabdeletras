import Logo from '../Logo';
import Socials from '../Socials';
import { Link } from 'react-router';

function DesktopMenu() {
  return (
    <div className="hidden lg:block container mx-auto ">
      <div id="desktop-menu" className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        <nav>
          <ul className="flex justify-between gap-8 text-white  font-blackcrow font-thin">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/sobre-nos">Sobre Nós</a>
            </li>
            <li>
              <a href="/nossos-servicos">Nossos Serviços</a>
            </li>
            <li>
              <a href="/nossos-clientes">Nossos Clientes</a>
            </li>
            <li>
              <a href="/atendimento">Atendimento</a>
            </li>
          </ul>
        </nav>
        <Socials iconType="flat" />
      </div>
    </div>
  );
}

export default DesktopMenu;
