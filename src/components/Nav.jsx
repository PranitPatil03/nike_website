import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks, navRegisterLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} className="w-[130px] h-[29]" />
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
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navRegisterLinks.map((item) => (
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

        <div className="hidden max-lg:block">
          <img src={hamburger} className="w-[25px] h-[25px]" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
