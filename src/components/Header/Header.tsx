import { Link, useLocation } from "react-router-dom";
import "./header.css";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed w-full flex justify-between p-3 text-sky-50 z-40 headerbg">
      <div className="w-full flex items-baseline justify-between">
        <h1 className="title">
          <span className="bank">BBVA</span> tu asistente virtual
        </h1>
        <nav>
          <ul className="flex items-baseline justify-between gap-1">
            <li className="sm: text-sm">
              <Link
                className="text-sky-50"
                to={pathname === "/" ? "/acerca-de" : "/"}
              >
                {pathname === "/" ? "Acerca de:" : "Regresar"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
