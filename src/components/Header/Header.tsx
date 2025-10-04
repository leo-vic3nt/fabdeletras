import { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${isMobileMenuActive || scrolled ? 'bg-contrast-background' : 'bg-transparent'} px-4 py-2 sticky top-0 lg:py-4 sti w-full z-50`}
    >
      <MobileMenu isMobileMenuActive={isMobileMenuActive} setMobileMenuActive={setMobileMenuActive} />
      <DesktopMenu />
    </header>
  );
}

export default Header;
