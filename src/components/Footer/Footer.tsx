import Logo from '../Logo';
import Socials from '../Socials';
import ContatoMenu from './ContatoMenu';
import InstitucionalMenu from './InstitucionalMenu';
import ServicosMenu from './ServicosMenu';

function Footer() {
  return (
    <footer className="bg-[#a71617] px-4 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 ">
        <div className="flex flex-col items-center gap-5">
          <Logo />
          <Socials iconType="filled" />
        </div>

        <ServicosMenu />
        <InstitucionalMenu />
        <ContatoMenu />
      </div>
    </footer>
  );
}

export default Footer;
