import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>All Rights Reserved © 2022 Panthera Tigris Co., Ltd</h2>

      <div className="footer__right">
        <div className="footer__right--item">
          <Link href="/report">Report a problem</Link>
        </div>
        <div className="footer__right--item">
          <h3>Panthera's Life v0.1</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
