import type { ReactNode } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

interface Props {
  children: ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />

      <main className="grid">{children}</main>

      <Footer />
    </div>
  );
}

export default BaseLayout;
