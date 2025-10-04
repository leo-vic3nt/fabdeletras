import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <header className="sticky px-4 py-2 lg:py-4  z-50 top-0 bg-contrast-background ">
      <MobileMenu isMobileMenuActive={isMobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
      <DesktopMenu />
    </header>
  );
}

export default Header;
