import {useRouter} from "next/router";
import Link from "next/link";


function Navbar() {
  const router = useRouter()

  function onToggleLang(lng: string) {
    const {pathname, asPath, query} = router
    router.push({pathname, query}, asPath, {locale: lng})
  }

  return (
    <nav className="navbar sticky-top navbar-white bg-white navbar-dark navbar-expand-lg shadow-sm">
      <div className="container" id="container-menu">
        <Link className="navbar-brand" href="/">
          <img src="/img/logo-veritatrust-c.png" alt="Veritatrust" width="170"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex w-lg-50 search my-3 my-lg-0" role="search" action="/search">
            <input className="form-control" placeholder="Find products and services" name="query"/>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto bg-black">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle active align-self-center" aria-current="page" href="/">
                Explore
              </Link>
              <ul className="submenu dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Domaine name</Link>
                </li>
                <li><Link className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Another action</Link>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><Link className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Something else
                  here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link  align-self-center" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link align-self-center" href="#">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link align-self-center" href="https://dev.veritatrust.com/create_account">Create</Link>
            </li>
            <li className="nav-item"><Link className="nav-link align-self-center" href={'#'} type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#account" aria-controls="account"><i
              className="flaticon flaticon-user"></i></Link></li>
            <li>
              <button onClick={() => onToggleLang('tr')}>CHG LANG TO TR</button>
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
  )
}

export default Navbar;
