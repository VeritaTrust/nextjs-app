import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from './Nav';
import SearchBar from './SearchBar';
import { useState } from 'react';

function Navbar() {
  const router = useRouter();

  const [isActive, setActive] = useState(false);

  function onToggleLang(lng: string) {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lng });
  }

  function handleClick() {
    setActive(!isActive);
  }

  return (
    <>
      <nav className="navbar sticky-top navbar-white bg-white navbar-dark navbar-expand-lg shadow-sm">
        <div className="container" id="container-menu">
          <Link className="navbar-brand" href="/">
            <img
              src={'/img/logo-veritatrust-c.png'}
              alt="Veritatrust"
              width="170"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <SearchBar />

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item dropdown">
                <Link
                  href="/Explore"
                  className="nav-link dropdown-toggle active align-self-center"
                  aria-current="page"
                >
                  {' '}
                  Explore
                </Link>

                <ul
                  className="submenu dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flaticon flaticon-user"></i> Domaine name
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flaticon flaticon-user"></i> Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="flaticon flaticon-user"></i> Something else
                      here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/Resources"
                  className="nav-link  align-self-center"
                  aria-current="page"
                >
                  {' '}
                  Resource
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className="nav-link  align-self-center"
                  aria-current="page"
                >
                  {' '}
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/Create"
                  className="nav-link  align-self-center"
                  aria-current="page"
                >
                  {' '}
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link align-self-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#account"
                  aria-controls="account"
                  onClick={() => setActive(!isActive)}
                >
                  <i className="flaticon flaticon-user"></i>
                </a>
              </li>
              <li>
                <button onClick={() => onToggleLang('tr')}>
                  CHG LANG TO TR
                </button>
              </li>
              <li>
                <button onClick={() => onToggleLang('en-US')}>EN</button>
              </li>
              <li>
                <button onClick={() => onToggleLang('fr')}>FR</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Nav isActive={isActive} handleClick={handleClick} />
    </>
  );
}

export default Navbar;
