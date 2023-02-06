import React from "react";

type Props = {
  isActive: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

function Nav({isActive, handleClick}: Props) {

  function handleChange() {
    // TODO: Fatahou Implement
  }

  return (
    <>
      <div
        className={isActive ? "offcanvas offcanvas-end text-bg-primary show" : "offcanvas offcanvas-end text-bg-primary"}
        data-bs-scroll="true" tabIndex={-1} id="account" aria-labelledby="offcanvasWithBothOptionsLabel"
        aria-modal="true" role="dialog">
        <div className="offcanvas-body">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Connect by social account</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"
                    onClick={handleClick}></button>
          </div>

          <div className="offcanvas-body">
            <ul className="social-Connect">
              <li>
                <button title="Connect with Facebook"><i className="flaticon-facebook"></i></button>
              </li>
              <li>
                <button title="Connect with Google"><i className="flaticon-google"></i></button>
              </li>
              <li>
                <button title="Connect with MetaMask"><i className="flaticon-fox" id="metaloginbtn"></i></button>
              </li>
              <li>
                <button title="Connect with Apple"><i className="flaticon-apple"></i></button>
              </li>
            </ul>
            <div className="orbymail text-center">
              <div className="separator">Or</div>
            </div>
            <p>Enter your login and password</p>
            <form id="login">
              <div className="input-group">
                <input type="email" className="form-control" id="usermail" aria-describedby="emailHelp"
                       title="User Email" placeholder="User Email"/>
                <span className="input-group-text bg-success text-white border-success">
                    <i className="flaticon-user"></i>
                </span>
              </div>
              <div id="emailHelp" className="form-text text-white mb-3">We&apos;ll never share your email with anyone
                else.
              </div>
              <div className="input-group mb-3 ">
                <input type="password" className="form-control" id="userpassword" title="Password"
                       placeholder="Password"/>
                <span className="input-group-text bg-success toggle-password text-white border-success">
                    <i className="flaticon-hide"></i>
                </span>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberme" checked={false}
                       onChange={handleChange}/>
                <label className="form-check-label" htmlFor="rememberme">Stay connected</label>
              </div>

            </form>
            <button type="submit" className="btn btn-success" id="userbutton">Login</button>
            <div className="d-none" id="error-message-2">
              <div className="me-3"><i className="flaticon-information"></i></div>
              <div>Error message</div>
            </div>
            <hr/>
            <a className="btn btn-light" href="https://dev.veritatrust.com/resetpassword">Forgot your password</a>
            <p className="mt-3 mb-1">You haven&apos;t again an account ?</p>
            <button type="submit" className="btn btn-light">Create my account</button>
          </div>
        </div>
      </div>


    </>)
}

export default Nav;
