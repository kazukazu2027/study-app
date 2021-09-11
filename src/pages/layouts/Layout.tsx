import { ReactNode } from "react";
import Header from "../parts/Header/Header";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="w-11/12 m-auto">
        <Header />
        <div className=" m-auto">{children}</div>
      </main>
    </>
  );
};

export default Layout;
