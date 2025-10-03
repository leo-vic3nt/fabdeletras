import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <header className="bg-contrast-background px-4 py-2 lg:py-4 sticky top-0 z-50">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
}

export default Header;
