import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <header className="bg-contrast-background">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
}

export default Header;
