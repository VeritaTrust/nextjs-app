import { useState } from 'react';
//import { useParams } from 'react-router-dom'
//import { Link } from 'react-router-dom'

interface Props {
  rm: string;
}

//TODO: brk function MerchantDiv({rm})
function MerchantDiv({ rm }: Props) {
  //  let { website } = useParams();
  const [website] = useState('www.burakkaraoglan.com');

  return (
    <section className="profil-header">
      <div className="container">
        <div className="row mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="./">
                  <i className="flaticon-home"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Category</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Home page
              </li>
            </ol>
          </nav>
        </div>
        <div
          className="row d-flex align-items-center mb-3 aos animated aos-init aos-animate"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="col-lg-8 pt-2 pb-5 d-grid info-mark">
            <div className="logo">
              <img
                src="https://store.fatasoft-consulting.com/wp-content/uploads/2022/07/cropped-icon-1.png"
                alt="Shoei"
              />
            </div>
            <div className="brand">
              <h1>Store fatasoft</h1>
              <small className="text-muted">
                Reviews <strong>20</strong> • Mean
              </small>
              <div className="form__header__note">
                <div className="form__star mb-3 d-flex justify-content-start">
                  <div className="star star__1 active"></div>
                  <div className="star star__2 active"></div>
                  <div className="star star__3 active"></div>
                  <div className="star star__4 active"></div>
                  <div className="star star__5"></div>
                  <p className="note lead my-auto ms-3 text-success">{rm}</p>
                </div>
                <p className="certified small bg-success text-white d-inline py-2 px-3 rounded-3 shadow">
                  <i className="flaticon-check me-1"></i> verified company
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="link-brand">
              <a href={website} className="link">
                <p className="lead p-3 pe-5 rounded-4">
                  <i className="flaticon-global-network me-1"></i> {website}
                  <span>Visit the website</span>
                  <i className="flaticon-fleche-angulaire-pointant-vers-la-droite"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MerchantDiv;
