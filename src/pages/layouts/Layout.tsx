import { ReactNode } from "react";
import Header from "../parts/Header/Header";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className=" min-h-screen bg-gray-50">
        <Header />
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default Layout;
