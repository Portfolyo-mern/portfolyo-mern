import React, {useState}from 'react';
import "./Header2.scss"
const ESC_KEY_CODE = "Escape";

export const NavigationMenu = (props) => {
  const { navOpen, navIsAnimating, closeNav } = props;
  const keyPressHandler = ({ key }) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [navOpen]);
  const classes = `${navOpen ? " active" : ""}${
    navIsAnimating ? " is-animating" : ""
  }`;
  return (
    <div className={`navigation-menu${classes}`}>
      <div className="wrap">
        <div className="cols">
          <div className="col col-left col-links">
            <ul className="links">
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/David_Bowie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  About Major Tom
                </a>
              </li>
              <li className="link">
                <a
                  href="https://images.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Photos from a Tin Can
                </a>
              </li>
              <li className="link">
                <a
                  href="https://www.nasa.gov/audience/foreducators/stem-on-station/ditl_eating"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Shop for Protein Pills
                </a>
              </li>
              <li className="link">
                <a
                  href="https://en.wikipedia.org/wiki/Mission_control_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Navigates to"
                >
                  Contact Ground Control
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-right col-image">
            <img className="astro" src="https://i.imgur.com/0pWqp5j.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = (props) => {
  const { navOpen, navIsAnimating, toggleNavHandler } = props;
  return (
    <header className="header">
      <div className="wrap">
        <button
          className={`nav-button${navIsAnimating ? " is-animating" : ""}`}
          type="button"
          aria-label="Toggle Navigation"
          onClick={(event) => toggleNavHandler(event)}
        >
          <span className={`label--nav-closed${!navOpen ? " active" : ""}`}>
            menu
          </span>
          <span className={`label--nav-open${navOpen ? " active" : ""}`}>
            close
          </span>
        </button>
      </div>
    </header>
  );
};

export const Header2 = (props) => {
    const [navOpen, setnavOpen] = useState(false);
    const [navIsAnimating, setnavIsAnimating] = useState(false);

    const toggleNav = (event) => {
        event.preventDefault();
        if (event){
            event.preventDefault();
            setnavIsAnimating(true);
        }
        if (navOpen) document.body.classList.remove("nav-open");
        if (!navOpen) document.body.classList.add("nav-open");
        setTimeout(() => {
            setnavOpen(!navOpen);
            setnavIsAnimating(false);
        }, 500);
    };

    const openNav = (event) => {
        if (event) event.preventDefault();
        document.body.classList.add("nav-open");
        setnavOpen(true);
    };

    const closeNav = () => {
        document.body.classList.remove("nav-open");
        setnavOpen(false);
    };

    return (
      <div className="layout">
        <Header
          navOpen={navOpen}
          toggleNavHandler={(event) => toggleNav(event)}
          navIsAnimating={navIsAnimating}
        />
        <NavigationMenu
          navOpen={navOpen}
          navIsAnimating={navIsAnimating}
          closeNav={(event) => closeNav(event)}
          toggleNavHandler={(event) => toggleNav(event)}
        />
        </div>
    );
}

export default Header2;
