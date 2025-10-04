import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <header
      className={`${isMobileMenuActive ? 'bg-contrast-background' : 'bg-transparent'} px-4 py-2 lg:py-4 fixed w-full z-50`}
    >
      <MobileMenu isMobileMenuActive={isMobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
      <DesktopMenu />
    </header>
  );
}

export default Header;
