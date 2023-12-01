import { menu, user } from "../assets/icons";
import bookifyLogo from "../assets/images/bookify-logo.png";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x mt-[-40px] absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={bookifyLogo}
            alt="logo"
            width={180}
            height={150}
            className="m-0 w-[180px] h-[180px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">
            <img src={user} width={25} height={25} alt="user icon" />
          </a>
          <span></span>
          <a href="/">Sign in</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={menu} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
