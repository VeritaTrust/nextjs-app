import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-primary pt-5 pb-2 text-white">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6">
              <h3>Stay in touch</h3>
              <p>Join our mailing list to receive updates regarding our new features, tips and advices.</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Our newsletter" aria-label="Notre newsletter"
                       aria-describedby="button-newsletter"/>
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
              <Image className="mb-3" height={40} src={"/logo-wg.png"} alt="Veritatrust" width="200"/>
              <p>VeritaTrust is the only decentralized review system backed by Blockchain, A.I and machine learning,
                helping businesses to collect verified feedbacks, boost sales and increase loyalty.
              </p>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-lg-4">
                  <h4>Corporate</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">About</a></li>
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
              <li className="list-inline-item"><a href="#">Privacy policy</a></li>
              <li className="list-inline-item"><a href="#">Legal information</a></li>
              <li className="list-inline-item"><a href="#">T&amp;Cs</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
