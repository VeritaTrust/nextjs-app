import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary py-2 text-white navbar">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6">
            <h3>Stay in touch</h3>
            <p>Join our mailing list to receive updates regarding our new features, tips and advices.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Our newsletter" aria-label="Our newsletter"
                     aria-describedby="button-newsletter" />
                <button className="btn btn-outline-success" type="button" id="button-newsletter">Subscribe</button>
            </div>

          </div>
          <div className="col-md-6">
            <h3>Follow us</h3>
            <ul className="list-inline">
              <li className="list-inline-item">Logo 1</li>
              <li className="list-inline-item">Logo 2</li>
              <li className="list-inline-item">Logo 3</li>
              <li className="list-inline-item">Logo 4</li>
              <li className="list-inline-item">Logo 5</li>
              <li className="list-inline-item">Logo 6</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <hr/>
        <div className="row py-3">
          <div className="col-md-4">
            <img className="mb-3" src="./assets/img/logo-veritatrust-wg.png" alt="Veritatrust" width="200" />
              <p>VeritaTrust is the only decentralized review system backed by Blockchain, A.I and machine learning,
                helping businesses to collect verified feedbacks, boost sales and increase loyalty.
              </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-4">
                <h4>Corporate</h4>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>Blog</li>
                  <li>jobs</li>
                  <li>Contact</li>
                  <li>Press</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>My Account</h4>
                <ul className="list-unstyled">
                  <li>Sign up</li>
                  <li>Login</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>Enterprises</h4>
                <ul className="list-unstyled">
                  <li>Sign up Pro</li>
                  <li>Login</li>
                  <li>Our solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr/>
        <div className="d-flex justify-content-between">
          <p>© 2022 - All right reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><Link href="#">Privacy policy</Link></li>
            <li className="list-inline-item"><Link href="#">Legal information</Link></li>
            <li className="list-inline-item"><Link href="#">T&Cs</Link></li>
          </ul>
        </div>
      </div>

    </footer>
)
}

export default Footer;
