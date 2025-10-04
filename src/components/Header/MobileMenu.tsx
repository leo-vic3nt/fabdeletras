import { Link } from 'react-router';
import MobileMenuToggue from './MobileMenuToggle';
import Socials from '../Socials';
import Logo from '../Logo';

interface Props {
  isMobileMenuActive: boolean;
  setMobileMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isMobileMenuActive, setMobileMenuActive }: Props) {
  return (
    <>
      <div className={`flex justify-center lg:hidden ${isMobileMenuActive ? 'min-h-dvh' : 'min-h-auto'}`}>
        <MobileMenuToggue toggleMenu={setMobileMenuActive} isActive={isMobileMenuActive} />
        <div className="flex flex-col items-center gap-20">
          <Link to="/">
            <Logo />
          </Link>

          <nav className={`${isMobileMenuActive ? 'block' : 'hidden'} font-blackcrow font-thin`}>
            <ul className="flex flex-col items-center gap-5 text-white">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/sobre-nos">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/nossos-servicos">Nossos Serviços</Link>
              </li>
              <li>
                <Link to="/nossos-clientes">Nossos Clientes</Link>
              </li>
              <li>
                <Link to="/atendimento">Atendimento</Link>
              </li>
            </ul>
          </nav>
          <div className={`${isMobileMenuActive ? 'block' : 'hidden'}`}>
            <Socials iconType="flat" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
