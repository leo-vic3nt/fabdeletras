import { useState } from 'react';
import MobileMenuToggue from './MobileMenuToggle';
import Socials from './Socials';

function MobileMenu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={`flex justify-center lg:hidden px-4 py-2 ${active ? 'min-h-dvh' : 'min-h-auto'}`}>
        <MobileMenuToggue toggleMenu={setActive} />
        <div className="flex flex-col items-center gap-20">
          <a href="/">
            <img src="/logos/logo-mobile.png" alt="logo" className="w-14" />
          </a>

          <nav className={`${active ? 'block' : 'hidden'}`}>
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
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
