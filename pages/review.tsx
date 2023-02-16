import { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

interface Props {
  merchantReviews: MerchantReview[];
  webmerchant: string;
}

type MerchantReview = {
  name: string;
  RatingMoy: string;
};

const Review: NextPage<Props> = ({ merchantReviews, webmerchant }) => {
  console.log(merchantReviews);

  const { t: translate } = useTranslation('about');
  const { locale } = useRouter();
  console.log('locale', locale);
  console.log('TRANsLATE', translate('about_us_text'));

  function update_goodchbox() {
    // FILL IN
  }

  function update_badchbox() {
    // FILL IN
  }

  function update_excellentchbox() {
    // FILL IN
  }

  function update_averagechbox() {
    // FILL IN
  }

  function update_vbadchbox() {
    // FILL IN
  }

  function checkRatings() {
    // FILL IN
  }

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>Veritatrust Review Page</title>
      </Head>
      <main>
        <section className="profil-header">
          <div className="container">
            <div className="row mt-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="./">
                      <i className="flaticon-home"></i>Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Category</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Home page
                  </li>
                </ol>
              </nav>
            </div>
            <div
              className="row d-flex align-items-center mb-3 aos animated"
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
                    Reviews <strong>{merchantReviews.length}</strong> • Mean
                  </small>
                  <div className="form__header__note">
                    <div className="form__star mb-3 d-flex justify-content-start">
                      <div className="star star__1 active"></div>
                      <div className="star star__2 active"></div>
                      <div className="star star__3 active"></div>
                      <div className="star star__4 active"></div>
                      <div className="star star__5"></div>
                      <p className="note lead my-auto ms-3 text-success">
                        {merchantReviews[0].RatingMoy}
                      </p>
                    </div>
                    <p className="certified small bg-success text-white d-inline py-2 px-3 rounded-3 shadow">
                      <i className="flaticon-check me-1"></i> verified company
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="link-brand">
                  <Link href={`https://${webmerchant}`} className="link">
                    <p className="lead p-3 pe-5 rounded-4">
                      <i className="flaticon-global-network me-1"></i>
                      {webmerchant}
                      <span>Visit the website</span>
                      <i className="flaticon-fleche-angulaire-pointant-vers-la-droite"></i>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-success profil-main">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="bg-white p-3 mb-2 mb-md-5 rounded-5 shadow add-review-express d-flex justify-content-between aos animated aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <div className="profil d-flex">
                    <img
                      className="me-3 d-none d-lg-block"
                      src="/img/star-0.png"
                      width="50"
                      height="50"
                    />
                    <p>
                      <Link href="#">Write a review</Link>
                    </p>
                  </div>
                  <div className="form__star">
                    <img src="/img/star-3.svg" alt="reviews" />
                  </div>
                </div>
                <div
                  className="bg-white p-3 mb-3 rounded-5 shadow reviews-filter aos animated"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <div className="d-flex justify-content-between">
                    <h2 className="d-flex">
                      Reviews •{' '}
                      <span className="ms-2">{merchantReviews.length}</span>
                    </h2>
                    <select
                      className="form-select d-flex w-50"
                      aria-label="Default select example"
                    >
                      <option selected>All countries</option>
                      <option value="1">English</option>
                      <option value="2">French</option>
                      <option value="3">Deutsch</option>
                    </select>
                  </div>
                  <hr />
                  <div className="filters">
                    <label htmlFor="excellent" className="lead d-grid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="excellent"
                        onClick={update_excellentchbox}
                      />

                      <small>Excellent</small>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Tres positif"
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <style jsx>{`
                          .progress-bar {
                            width: 55%;
                          }
                        `}</style>
                      </div>
                      <small>55%</small>
                    </label>

                    <label htmlFor="Bien" className="lead d-grid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Bien"
                        onClick={update_goodchbox}
                      />
                      <small>Good</small>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Tres positif"
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <style jsx>{`
                          .progress-bar {
                            width: 40%;
                          }
                        `}</style>
                      </div>
                      <small>40%</small>
                    </label>
                    <label htmlFor="moyen" className="lead d-grid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="moyen"
                        onChange={update_averagechbox}
                      />

                      <small>Average</small>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Tres positif"
                          aria-valuenow={33}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <style jsx>{`
                          .progress-bar {
                            width: 33%;
                          }
                        `}</style>
                      </div>
                      <small>33%</small>
                    </label>
                    <label htmlFor="bas" className="lead d-grid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="bas"
                        onClick={update_badchbox}
                      />
                      <small>Bad</small>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Tres positif"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <style jsx>{`
                          .progress-bar {
                            width: 10%;
                          }
                        `}</style>
                      </div>
                      <small>10%</small>
                    </label>
                    <label htmlFor="mauvais" className="lead d-grid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="mauvais"
                        onChange={checkRatings}
                        onClick={update_vbadchbox}
                      />
                      <small>Very bad</small>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Tres positif"
                          aria-valuenow={2}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                        <style jsx>{`
                          .progress-bar {
                            width: 2%;
                          }
                        `}</style>
                      </div>
                      <small>2%</small>
                    </label>
                  </div>
                </div>
                <div className="reviews-list">
                  <div
                    className="bg-white p-3 mb-2 rounded-5 shadow aos animated aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div className="profil d-flex pb-2">
                      <img src="/img/star-1.png" width="50" height="50" />
                      <div className="info ms-3">
                        <p className="name lead mb-0">Nicolas Bornet</p>
                        <p className="analyse text-muted mb-0">
                          3 reviews • <i className="flaticon-location"></i> FR
                        </p>
                      </div>
                    </div>
                    <div className="notation d-lg-flex justify-content-between my-3">
                      <div className="note small me-lg-3 mb-2">
                        <div className="form__star d-flex justify-content-start">
                          <div className="star star__1 active"></div>
                          <div className="star star__2 active"></div>
                          <div className="star star__3 active"></div>
                          <div className="star star__4 active"></div>
                          <div className="star star__5"></div>
                        </div>
                      </div>
                      <div className="verified me-lg-3 mb-2">
                        <button
                          type="button"
                          className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
                          data-bs-html="true"
                          data-bs-trigger="focus"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-custom-class="veritatrust-popover"
                          data-bs-title="<i class='flaticon-cube-3d me-1'></i> Verified via Blockchain"
                          data-bs-content="Blockchain lorem ipsum <Link href='' target='_blank'>Tooltip</Link> <u>with</u> <b>HTML</b>"
                        >
                          <span className="text-white">
                            <i className="flaticon-cube-3d me-1"></i> Verified
                            via Blockchain
                          </span>
                        </button>
                      </div>
                      <div className="date text-primary ms-auto">
                        29 july 2022
                      </div>
                    </div>
                    <div className="content mb-2">
                      <h3>Très content de mes achats</h3>
                      <p className="text-muted">
                        Commande reçue rapidement J’ai commandé sur ce site un
                        service de table pour un événement. Je l’ai reçu comme
                        promis en 24H chrono. Je recommande
                      </p>
                    </div>
                    <div className="share d-flex justify-content-around">
                      <div className="recommanded">
                        <Link href="#">
                          <i className="flaticon-heart"></i> Useful
                        </Link>
                      </div>
                      <div className="share">
                        <Link href="#">
                          <i className="flaticon-network"></i> Share
                        </Link>
                      </div>
                      <div className="flag">
                        <Link href="#" aria-label="flag">
                          <i className="flaticon-red-flag"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>TODO: BURAK APPEND BElow HEre</div>
                </div>
                <nav className="mt-5" aria-label="...">
                  <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item active" aria-current="page">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="?site=<%=webmerchant%>&page=2"
                      >
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link
                        className="page-link"
                        href="?site=<%=webmerchant%>&page=3"
                      >
                        3
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 text-end">
                <div
                  className="bg-white p-3 mb-3 rounded-5 shadow widget enterprise aos animated"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  <div className="header d-flex">
                    <h4>Company&apos;s overview</h4>
                    <p>
                      <Link href="#">Tout afficher</Link>
                    </p>
                  </div>
                  <div className="content">
                    <ul className="ps-0">
                      <li className="d-flex">
                        <div className="icon">
                          <i className="flaticon-check"></i>
                        </div>
                        <div className="text">Claimed profile</div>
                      </li>
                      <li className="d-flex">
                        <div className="icon">
                          <i className="flaticon-messager"></i>
                        </div>
                        <div className="text">
                          Answered to 33 out of 38 negative reviews
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="icon">
                          <i className="flaticon-clock"></i>
                        </div>
                        <div className="text">
                          Answered to negative reviews within 1 week
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="bg-white p-3 mb-3 rounded-5 shadow widget about aos animated"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="header d-flex">
                    <h4>About {webmerchant}</h4>
                  </div>
                  <div className="content">
                    <p>
                      We offer all the shoes and accessories you want, a wide
                      range of fashionable products, and the best brands of the
                      moment. A gigantic choice: Guess, Tommy Hilfiger, Ecco,
                      Geox, Pepe Jeans, Clarks, Gino Rossi and many more...
                      Shoes, bags, wallets and belts – all available to you
                      24/7. We are always here for you!
                    </p>
                    <div className="contact">
                      <h4>Contact</h4>
                      <ul className="ps-0">
                        <li className="d-flex">
                          <div className="icon">
                            <i className="flaticon-location"></i>
                          </div>
                          <div className="text">France</div>
                        </li>
                      </ul>
                    </div>
                    <div className="category">
                      <h4>Category</h4>
                      <ul className="ps-0">
                        <li className="d-flex">
                          <div className="text">
                            <Link href="#">Équipement moto</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white p-3 mb-3 rounded-5 shadow widget other-shoppers aos animated"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="header">
                    <h4>
                      People who viewed this business&apos;s page also viewed: :
                    </h4>
                  </div>
                  <div className="content">
                    <ul className="ps-0">
                      <li className="d-flex">
                        <div className="image me-2">
                          <img
                            src="/img/reviews-homepage.jpg"
                            height="50"
                            width="100"
                          />
                        </div>
                        <div className="text">
                          <p className="name">HJC</p>
                          <div className="notation d-flex my-1">
                            <div className="note small me-2">
                              <div className="form__star d-flex justify-content-start">
                                <div className="star star__1 active"></div>
                                <div className="star star__2 active"></div>
                                <div className="star star__3 active"></div>
                                <div className="star star__4 active"></div>
                                <div className="star star__5"></div>
                              </div>
                            </div>
                            <div className="score my-auto text-primary d-inline">
                              381000
                            </div>
                          </div>
                          <p className="small text-muted unclaimed">
                            Unclaimed profile
                          </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="image me-2">
                          <img
                            src="/img/reviews-homepage.jpg"
                            height="50"
                            width="100"
                          />
                        </div>
                        <div className="text">
                          <p className="name">Shark</p>
                          <div className="notation d-flex my-1">
                            <div className="note small me-2">
                              <div className="form__star d-flex justify-content-start">
                                <div className="star star__1 active"></div>
                                <div className="star star__2 active"></div>
                                <div className="star star__3 active"></div>
                                <div className="star star__4 active"></div>
                                <div className="star star__5"></div>
                              </div>
                            </div>
                            <div className="score my-auto text-primary d-inline">
                              369852
                            </div>
                          </div>
                          <p className="small text-muted claimed">
                            Unclaimed profile
                          </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="image me-2">
                          <img
                            src="/img/reviews-homepage.jpg"
                            height="50"
                            width="100"
                          />
                        </div>
                        <div className="text">
                          <p className="name">Araï</p>
                          <div className="notation d-flex my-1">
                            <div className="note small me-2">
                              <div className="form__star d-flex justify-content-start">
                                <div className="star star__1 active"></div>
                                <div className="star star__2 active"></div>
                                <div className="star star__3 active"></div>
                                <div className="star star__4 active"></div>
                                <div className="star star__5"></div>
                              </div>
                            </div>
                            <div className="score my-auto text-primary d-inline">
                              740258
                            </div>
                          </div>
                          <p className="small text-muted need-reviews">
                            Review request
                          </p>
                        </div>
                      </li>
                    </ul>
                    <p className="border-top pt-3">
                      Suggestions based on user browsing trends..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'common'])),
      merchantReviews: [
        {
          name: 'BURAK',
          RatingMoy: 'ratingMoy',
        },
      ],
      webmerchant: 'store.fatasoft-consulting.com',
    },
  };
}

export default Review;

/*

<
                  %
                  if(merchantReviews.length!=0){
                    var i=0;
                    merchantReviews.forEach(function(merchant_review){

                    %>

                    <div class="bg-white p-3 mb-2 rounded-5 shadow aos animated" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div class="profil d-flex pb-2">
                        <img src="/img/star-1.png" width="50" height="50">
                        <div class="info ms-3">
                        <p class="name lead mb-0"><%=merchantReviews[i].first_name%> <%=merchantReviews[i].last_name%></p>
                      <p class="analyse text-muted mb-0"><%=merchantReviews[i].Nbre%> reviews.ts • <i class="flaticon-location"></i> FR</p>
                    </div>
                    </div>
                      <div class="notation d-lg-flex justify-content-between my-3">
                        <div class="note small me-lg-3 mb-2">
                          <div class="form__star d-flex justify-content-start">
                            <!--   <div class="star star__1 active"></div>
                               <div class="star star__2 active"></div>
                               <div class="star star__3 active"></div>
                               <div class="star star__4 active"></div>
                               <div class="star star__5"></div> -->
                            <div> <img alt="Noté 5 sur 5 étoiles" src="img/star-<%=merchantReviews[i].rating%>-svg.svg" width="120" height="70"> </div>
                          </div>
                        </div>
                        <!--   <div class="verified ms-3">
                               <p class="certified small bg-success text-white d-inline py-1 px-2 rounded-3 "><Link class="text-white" href="https://rinkeby.etherscan.io/tx/"><i class="flaticon-cube-3d me-1"></i> Verified via Blockchain</Link></p>
                           </div>
                           <div class="verified me-lg-3 mb-2">
                               <p class="certified small bg-success text-white d-inline py-1 px-2 rounded-3 " data-bs-html="true" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip" data-bs-title="Blockchain lorem ipsum <em>Tooltip</em> <u>with</u> <b>HTML</b>"><Link class="text-white" href="https://rinkeby.etherscan.io/tx/<%=merchantReviews[i].hash_transaction%>"><i class="flaticon-cube-3d me-1"></i> Verified via Blockchain</Link></p>
                           </div>  -->
                        <div class="verified me-lg-3 mb-2">
                          <button type="button" class="certified small bg-success text-white d-inline px-0 px-1 rounded-3" data-bs-html="true" data-bs-trigger="focus" data-bs-toggle="popover" data-bs-placement="top" data-bs-custom-class="veritatrust-popover" data-bs-title="<i class='flaticon-cube-3d me-1'></i> Verified via Blockchain" data-bs-content="We use the blockchain to track and verify the transaction. <br><Link href='https://goerli.etherscan.io/tx/<%=merchantReviews[i].hash_transaction%>' target='_blank'>View the onchain transaction</Link> | <Link href='#' target='_blank'>What is Blockchain?</Link>"><span class="text-white"><i class="flaticon-cube-3d me-1"></i> Verified via Blockchain</span></button>
                        </div>
                        <div class="date text-primary ms-auto"> <%=Intl.DateTimeFormat('en', {month: 'short'}).format(new Date((1+merchantReviews[i].experienceDate.getMonth()).toString()))%> <%=merchantReviews[i].experienceDate.getDate()%>, <%=merchantReviews[i].experienceDate.getFullYear()%></div>
                      </div>


                      <div class="content mb-2">


                        <h3><%=merchantReviews[i].title%></h3>
                        <p class="text-muted"><%=merchantReviews[i].content%>
                        </p>
                      </div>




                      <div class="related_product">
                        <h4 class="h5"><%=merchantReviews[i].titreprodreview%></h4>
                        <div class="d-flex">
                          <div class="photo"><img src="https://asset1.cxnmarksandspencer.com/is/image/mands/PL_05_T34_1316A_T4_X_EC_0?$PDP_IMAGEGRID_ZOOM_XLG$" alt=""></div>

                          <div class="related_content">
                            <p class="text-primary mb-0"><%=merchantReviews[i].contentpr%></p>
                            <p class="mb-0">(<%=merchantReviews[i].first_name%>) has rated this product-<%=merchantReviews[i].product_id%> <%=merchantReviews[i].ratingp%>/5</p>
                            <Link class="btn btn-secondary btn-sm mt-2" href="#">All reviews.ts for this product</Link>
                          </div>

                        </div>
                      </div>

                      <div class="share d-flex justify-content-around">
                        <div class="recommanded">
                          <Link href="#"><i class="flaticon-heart"></i> Useful</Link></div>
                        <div class="share"><Link href="#"><i class="flaticon-network"></i> Share</Link></div>
                        <div class="flag"><Link href="#" aria-label="flag"><i class="flaticon-red-flag"></i></Link></div>
                      </div>
                    </div>
                      <%  i++;}) %>
                      <% } else{%>
                    <h3>No data</h3>
                      <p class="text-muted">no content
                      </p>
                      <%} %>
<!--  Fin de la boucle pour l'affichage des datas -->
*/
