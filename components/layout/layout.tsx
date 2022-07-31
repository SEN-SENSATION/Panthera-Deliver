import Footer from "./footer";
import Header from "./header";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem: React.FC<{
  href: string;
  text: string;
  icon: string;
  active?: boolean;
}> = (props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <div
        className={`noselect menu__item ${
          router.pathname === props.href ? "active" : ""
        }`}
      >
        <i className={`bx ${props.icon}`}></i>
        <h3>{props.text}</h3>
      </div>
    </Link>
  );
};

const Layout: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <Header />
      <main>
        <div className="menu">
          <MenuItem text="Deliver Service" href="/" icon="bx-package" active />
          <MenuItem text="Clocker" href="/clocker" icon="bx-time-five" />
        </div>
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
