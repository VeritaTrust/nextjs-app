import {useRouter} from "next/router";


function Navbar() {
  const router = useRouter()

  function onToggleLang(lng: string) {
    const {pathname, asPath, query} = router
    router.push({pathname, query}, asPath, {locale: lng})
  }

  return (
    <nav className="navbar sticky-top navbar-white bg-white navbar-dark navbar-expand-lg shadow-sm">
      <div className="container" id="container-menu">
        <a className="navbar-brand" href="./">
          <img src="/img/logo-veritatrust-c.png" alt="Veritatrust" width="170"/>
        </a>
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
              <a className="nav-link dropdown-toggle active align-self-center" aria-current="page" href="/">Explore</a>
              <ul className="submenu dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Domaine name</a>
                </li>
                <li><a className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Another action</a>
                </li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#"><i className="flaticon flaticon-user"></i> Something else
                  here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link  align-self-center" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>

            </li>
            <li className="nav-item">
              <a className="nav-link align-self-center" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link align-self-center" href="https://dev.veritatrust.com/create_account">Create</a>
            </li>
            <li className="nav-item"><a className="nav-link align-self-center" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#account" aria-controls="account"><i
              className="flaticon flaticon-user"></i></a></li>
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
