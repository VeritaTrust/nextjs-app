import {NextPage} from "next";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

interface Props {
  productReview: ProductReview;
}

type ProductReview = {
  productName: string;
}

const ProductReview: NextPage<Props> = ({productReview}) => {
  console.log(productReview)

  const {t: translate} = useTranslation('about')
  const {t: translateCommon} = useTranslation('common')
  const {locale} = useRouter()
  console.log('locale', locale)
  console.log('TRANsLATE', translate('about_us_text'))
  const {productName} = productReview;
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app"/>
        <title>Veritatrust Product Review Page</title>
      </Head>
      <main>
        <section className="py-5 form">
          <form className="row d-flex align-items-center" id="product_form" method="POST" action="pages">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                  <div>REMOVE THIS - {translate('about_us_text')}</div>
                  <h3>share_your_opinion_message<span> product: {productName}</span></h3>
                  <p>
                    {translateCommon('product_form_testimonal_msg')}
                    {translateCommon('product_form_write_your_review')}
                  </p>
                </div>
                <div className="col-11 col-lg-8 py-3 mx-auto position-relative">
                  <ul className="step-reviews nav text-center">
                    <li className="nav-item w-33 step-1 done">
                      <span className="badge rounded-circle">1</span>
                      <p className="mb-0">Your merchant <br/>review</p>
                    </li>
                    <li className="nav-item w-33 step-2 active">
                      <span className="badge rounded-circle">2</span>
                      <p className="mb-0" aria-current="page">Your product <br/>review</p>
                    </li>
                    <li className="nav-item w-33 step-3 ">
                      <span className="badge rounded-circle">3</span>
                      <p className="mb-0">Validated<br/>reviews</p>
                    </li>
                  </ul>
                  <div id="line">
                    <div id="line-progress"></div>
                  </div>
                </div>


                <div className="col-11 col-lg-8 py-4 px-lg-4 mx-auto bg-light rounded-5">
                  <div className="form__header">
                    <div className="row d-flex align-items-center">
                      <div className="col-6 col-md-4 col-xl-3 d-flex rounded-4 border bg-white visuel-mark g-0 mx-auto">
                        <img className="align-self-center"
                             src="https://m.media-amazon.com/images/I/61Q9Zr0wt5L._AC_UX425_.jpg" alt="Product name"/>
                      </div>
                      <div className="col-12 col-md-8 col-xl-9">
                        <div className="form__header__note">
                          <p className="lead">
                            {productName}
                          </p>
                          <div className="form__star mb-3 d-flex justify-content-start">
                            <div className="form__star mb-3 d-flex justify-content-start" id="review"
                                 data-review="merchand"
                                 data-selected="1">
                              <div className="star-review star-default star-empty" data-index="1"></div>
                              <div className="star-review star-default star-empty" data-index="2"></div>
                              <div className="star-review star-default star-empty" data-index="3"></div>
                              <div className="star-review star-default star-empty" data-index="4"></div>
                              <div className="star-review star-default star-empty" data-index="5"></div>
                            </div>

                          </div>
                          <p><span id="review-value">1 </span> <span id="review-value-text"> <strong> star: </strong>very bad </span>
                          </p>
                        </div>
                      </div>
                      <hr/>
                      <div className="form__content">
                        <p className="lead mt-3 mb-0">
                          {translateCommon('Write_a_title')}
                        </p>
                        <input className="form-control" type="text" name="titre" id="titre" required/>
                        <p className="lead mb-0">
                          {translateCommon('product_form_opinion_message')}
                        </p>
                        <p>
                          {translateCommon('product_form_opinion_message2')}
                        </p>
                        <textarea className="form-control" name="content" id="content" rows={10}
                                  placeholder="Write your review here. Talk about your experience without using offensive language. Leave an honest, useful and constructive testimonial."></textarea>
                        <p className="">
                          {translateCommon('add_unless_tree_pictures')}<span className="text-muted">(facultatif)</span></p>
                        <div className="row mb-4">
                          <div className="col-6 col-lg">
                            <div className="d-flex rounded-4 border bg-white visuel-mark">
                              <img className="align-self-center"
                                   src="https://m.media-amazon.com/images/I/61Q9Zr0wt5L._AC_UX425_.jpg"
                                   alt="Product name"/>
                            </div>
                          </div>
                          <div className="col-6 col-lg">
                            <div className="d-flex rounded-4 border bg-white visuel-mark">
                              <img className="align-self-center"
                                   src="https://m.media-amazon.com/images/I/61EP5JVoyxL._AC_UL1024_.jpg"
                                   alt="Product name"/>
                            </div>
                          </div>
                          <div className="col-6 col-lg">
                            <label className="add__photo rounded-3 border w-100 text-center d-flex">
                              <div className="m-auto">
                                <i className="flaticon-galerie"></i>
                                <div className="">+ {translateCommon('add_photo_video')}</div>
                                <input
                                  accept="image/jpeg, image/tiff, image/webp, image/png, video/mp4, video/quicktime"
                                  type="file" className="d-none"/>
                              </div>
                            </label>
                          </div>
                        </div>

                      </div>
                      <p className="lead mt-3 mb-0">
                        {translateCommon('experience_date')}
                      </p>
                      <input className="form-control" type="date"
                             data-date-inline-picker="true"
                             name="date" id="date" required/>
                      <div className="form__footer">

                        <span id="error"></span>

                        <div className="d-grid gap-2">
                          <button type="submit"
                                  className="btn-block btn btn-primary btn-lg text-uppercase text-right" id="btn">
                            Publish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps({locale}: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about',
        'common'
      ])),
      productReview: {
        productName: 'BURAK'
      }
      // Will be passed to the page component as props
    },
  }
}

export default ProductReview;

/*

  <input className="form-control" type="date" max="<%= new Date().toISOString().split(" T")[0] %>"
         data-date-inline-picker="true" value="<%= new Date().toISOString().split(" T")[0] %>"
         name="date" id="date" required />

  TOOD: fix max val, here in nextjs not ejs
*/
