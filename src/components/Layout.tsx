
import { ReactNode } from 'react';
import Taskbar from './Taskbar';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 py-16 container mx-auto">
        {children}
      </main>
      <Footer />
      <Taskbar />
    </div>
  );
};

export default Layout;
