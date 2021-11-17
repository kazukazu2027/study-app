import { ReactNode } from "react";
import Header from "../parts/Header/Header";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
