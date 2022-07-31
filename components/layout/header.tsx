import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href={"/"}>
        <h2 className={"noselect"}>Panthera's Life</h2>
      </Link>
      <div className="header__info">
        <div className="header__info--name">
          <h3>
            Prawich Thawansakdivudhi <br />{" "}
            <span className="header__info--role">Super Admin</span>
          </h3>
        </div>
        <img
          src="https://apis.ssdevelopers.xyz/images/1082022-907d5f58-2216-46c9-9e6c-1e596eb93f0e..png"
          alt="profile"
        />
      </div>
    </header>
  );
};

export default Header;
