import Socials from './Socials';

function DesktopMenu() {
  return (
    <div className="hidden lg:block container mx-auto py-4 px-4">
      <div id="desktop-menu" className="flex items-center justify-between">
        <a href="/">
          <img src="/logos/logo-desktop.png" alt="logo" className="w-[160px]" />
        </a>
        <nav>
          <ul className="flex justify-between gap-8 text-white">
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
        <Socials />
      </div>
    </div>
  );
}

export default DesktopMenu;
