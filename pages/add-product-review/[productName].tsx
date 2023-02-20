import {GetServerSideProps, NextPage} from 'next';
import {ProductMapper} from '@server/mappers';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ProductDto} from "@server/dto/ProductDto";
import {PrismaClient} from "@prisma/client";
import React from "react";
import Stars from "../../components/stars";
import {DEFAULT_RATING_STAR, getNoteByTextLength, RATING_STAR_TEXTS} from "../../helpers/const";
import {Field, Formik, FormikHelpers} from "formik";
import axios from "axios";
import {AddMerchantReviewDto} from "@server/dto/request/AddMerchantReviewDto";
import {useRouter} from "next/navigation";

interface Props {
  product: ProductDto;
}

const AddProductReview: NextPage<Props> = ({product}: Props) => {
  const router = useRouter();

  return (<>
    <section className="py-5 form">

      <Formik
        initialValues={{title: '', content: '', experienceDate: '', rating: DEFAULT_RATING_STAR}}
        onSubmit={(values, {setSubmitting}: FormikHelpers<FormValues>) => {
          setTimeout(() => {
            axios
              .post<AddMerchantReviewDto>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/products/${product.id}/reviews`,
                values
              )
              .then(() => router.push('/valid-review'))
              // TODO: What to do for error case?
              .catch(console.log)
              .finally(() => setSubmitting(false));
          }, 2000);
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue
            /* and other goodies */
          }) => (
          <form id="reviewform" onSubmit={handleSubmit}>
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                  <h3>Rate your product <span>{product.name}</span></h3>
                  <p>Share your opinion and get reward!</p>
                </div>
                <div className="col-11 col-lg-8 py-4 px-lg-4 mx-auto bg-light rounded-5">
                  <div className="form__header">
                    <div className="row d-flex align-items-center">
                      <div className="col-6 col-md-4 col-xl-3 d-flex rounded-4 border bg-white visuel-mark g-0 mx-auto">
                        <img className="align-self-center" src={product.imageUrl} alt="Product name"/>
                      </div>
                      <div className="col-12 col-md-8 col-xl-9">
                        <div className="form__header__note">
                          <p className="lead mb-0">{product.name}</p>
                          <p className="mb-0">How would you rate it?</p>
                          <Stars name={'rating'} onChange={handleChange} rating={values.rating}
                                 setRating={(num: number) => setFieldValue('rating', num)}/>
                          <p><span id="review-value">{values.rating}</span>
                            <span> <strong> stars: </strong>{RATING_STAR_TEXTS[values.rating - 1]}</span></p>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="form__content">
                      <p className="lead mt-3 mb-0">Title of your review <span className="text-muted">(required)</span>
                      </p>
                      <input className="form-control" type="text" id="title" name="title" required={true}
                             value={values.title}
                             onChange={handleChange}
                             onBlur={handleBlur}
                      />

                      {errors.title && touched.title}

                      <p className="lead mb-0">Your review</p>
                      <p>Focus on being factual and objective. Don&apos;t use aggressive language and don&apos;t post
                        personal
                        details.</p>
                      <p id="note_review">Your review content:
                        <span id="noteReview" style={{marginLeft: '10px'}}
                              className={`${getNoteByTextLength(values.content.length).className}`}>{getNoteByTextLength(values.content.length).title}</span>
                      </p>
                      <Field
                        required={false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content}
                        placeholder="State accurate facts and be objective"
                        name="content"
                        rows={10}
                        className="form-control"
                        component={'textarea'}
                      />
                      {errors.content && touched.content}

                      <p className="">Add up to 3 photos or videos to your review <span
                        className="text-muted">(optional)</span></p>
                      <div className="row mb-4">
                        <div className="col-6 col-lg">
                          <div className="d-flex rounded-4 border bg-white visuel-mark">
                            {/*
                              imagePreview ?
                                <img className="align-self-center" src={imagePreview} alt="Product name" id="img2"
                                     style={{maxWidth: "100%"}}/>
                                :

                                <img className="align-self-center" src={add_image} alt="Product name" id="img2"/>
                            */}
                          </div>
                        </div>
                        <div className="col-6 col-lg">
                          <div className="d-flex rounded-4 border bg-white visuel-mark">
                            {/*
                              imagePreview ?
                                <img className="align-self-center" src={imagePreview} alt="Product name" id="img2"
                                     style={{maxWidth: "100%"}}/>
                                :

                                <img className="align-self-center" src={add_image} alt="Product name" id="img2"/>
                            */}
                          </div>
                        </div>
                        {/*imagePreview && (
                          <img src={imagePreview} alt="Preview" style={{maxWidth: "100%"}}/>
                        )*/}
                        <div className="col-6 col-lg">
                          <label className="add__photo rounded-3 border w-100 text-center d-flex">
                            <div className="m-auto">
                              <i className="flaticon-galerie"></i>
                              <div className="">+ Add photo or video</div>
                              <input accept="image/jpeg, image/tiff, image/webp, image/png, video/mp4, video/quicktime"
                                     type="file" multiple id="image" className="d-none"
                                     onChange={handleChange}/>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <p className="lead">Proof of purchase <span className="text-muted">(optional)</span></p>
                    <div className="mb-3">
                      <input type="file" accept="image/jpeg, image/tiff, image/webp, image/png" className="form-control"
                             placeholder="Proof of purchase" aria-label="Proof of purchase"
                             onChange={handleChange}/>
                    </div>
                    <p className="text-muted">Can be a photo of the product with your VeritaTrust display name next to
                      it,
                      an invoice, a contract or an email exchange with the company.</p>
                    <div className="d-none">
                      Message d&apos;erreur
                    </div>
                    <p className="lead mt-3 mbnput cla-0">Experience date</p>
                    <input className="form-control" type="date" max="2022-12-08" data-date-inline-picker="true"
                           name="experienceDate" id="date" required={true}
                           value={values.experienceDate}
                           onBlur={handleBlur}
                           onChange={handleChange}/>
                    <p className="text-muted">By submitting a review, I accept VeritaTrust&apos;s Posting Guidelines and
                      Terms
                      of
                      Use Policy.</p>
                    <div className="d-none" id="root-submit">
                      <div className="row d-flex align-items-center">
                        <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                          <h3>Submit the review</h3>
                        </div>
                        <div className="col-11 col-lg-8 py-4 px-lg-6 mx-auto">
                          <div className="form__account">
                            <div className="row d-flex flex-column align-items-center">
                              <div className="col-12 col-md-6 d-flex flex-column mx-auto gap-2" id="module-connect">
                                <button className="btn btn-primary">Sign in with Facebook</button>
                                <button className="btn btn-primary">Sign in with Google</button>
                                <button className="btn btn-primary" id="metaloginbtn">Sign in with Metamask</button>
                                <a href="#" className="d-none">Sign in with Apple</a>
                              </div>
                              <div className="d-none">
                                <div className="orbymail text-center">
                                  <div className="separator">Use your email address</div>
                                </div>
                              </div>
                              <div className="row d-flex align-items-center" id="sumbit-email">
                              </div>
                              <div className="d-none" id="message-confirm">
                                <div className="me-3"><i className="flaticon-check"></i></div>
                                <div>Success Message</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div className="col-12 col-md-6 d-flex flex-column mx-auto gap-2" id="publish">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-primary"
                    >
                      {isSubmitting ? (
                        <>
                              <span
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                          Submitting...
                        </>
                      ) : (
                        `Publish`
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </section>
  </>)
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  try {
    const productName = context.params?.productName as string;

    if (!productName) {
      throw Error('NO PRODUCT FOUND TO WRITE REVIEW');
    }

    const product = await new PrismaClient().product.findUniqueOrThrow({
      where: {
        name: productName
      },
    });

    return {
      props: {
        ...(await serverSideTranslations(context.locale as string, ['about'])),
        product: ProductMapper.toDto(product),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

interface FormValues {
  title: string;
  content: string;
  experienceDate: string;
  rating: number;
}

export default AddProductReview;
