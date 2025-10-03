import { useState } from 'react';
import { Link } from 'react-router';
import MobileMenuToggue from './MobileMenuToggle';
import Socials from '../Socials';
import Logo from '../Logo';

function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={`flex justify-center lg:hidden   ${active ? 'min-h-dvh' : 'min-h-auto'}`}>
        <MobileMenuToggue toggleMenu={setActive} isActive={active} />
        <div className="flex flex-col items-center gap-20">
          <Link to="/">
            <Logo />
          </Link>

          <nav className={`${active ? 'block' : 'hidden'} font-blackcrow font-thin`}>
            <ul className="flex flex-col items-center gap-5 text-white">
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
          <div className={`${active ? 'block' : 'hidden'}`}>
            <Socials iconType="flat" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
