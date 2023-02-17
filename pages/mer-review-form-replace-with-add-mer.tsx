import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, {forwardRef, useState} from "react";
import {Form, Formik, FormikConfig, FormikErrors, FormikValues} from "formik";
import {ToastContainer} from "react-toastify";

interface Props extends FormikConfig<FormikValues> {
  siteKey: string;
}

interface FormValues {
  captcha: string;
  first_name: string;
}

const MerReviewFormReplaceWithAddMer = () => {
  //const [siteKey] = useState<string>("1be3a25e-95cb-441d-a951-f140b9e09428");
  const [siteKey] = useState<string>("10000000-ffff-ffff-ffff-000000000001"); // TEST
  const captchaRef = React.createRef<HCaptcha>();

  function handleSubmit(e: any) {
    console.log(e)
  }

// eslint-disable-next-line react/display-name
  const FormComponent = forwardRef<HCaptcha, Props>(
    ({siteKey, ...formikProps}, captchaRef) => {
      return (
        <div style={{marginTop: 30}}>
          <Formik
            {...formikProps}
            validate={({first_name}) => {
              let errors: FormikErrors<FormValues> = {};
              if (!first_name) {
                errors.first_name = "Enter your first name";
              }
              return errors;
            }}
          >
            {({setFieldValue}) => (
              <Form id="review_form" onSubmit={handleSubmit} action="">
                <div className="container">

                  <div className="row d-flex align-items-center">
                    <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                      <h3>Rate your experience <br/><span>www.store.fatasoft-consulting.com</span></h3>
                      <p>Share your opinion and get reward!</p>
                    </div>
                    <div className="col-11 col-lg-8 py-3 mx-auto position-relative">
                      <ul className="step-reviews nav text-center">
                        <li className="nav-item w-33 step-1 active ">

                          <span className="badge rounded-circle">1</span>
                          <p className="mb-0">Your merchant <br/>review</p>
                        </li>
                        <li className="nav-item w-33 step-2 ">
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
                          <div
                            className="col-8 col-md-4 col-xl-3 d-flex rounded-4 border bg-white visuel-mark logo mx-auto">
                            <img className="align-self-center m-0"
                                 src="https://store.fatasoft-consulting.com/wp-content/uploads/2022/07/cropped-icon-1.png"
                                 alt="Merchant name"/>
                          </div>
                          <div className="col-12 col-md-8 col-xl-9">
                            <div className="form__header__note">
                              <p className="lead">Rate your experience</p>
                              <div className="form__star mb-3 d-flex justify-content-start" id="review"
                                   data-review="merchand"
                                   data-selected="2">
                                <div className="star-review star-default star-empty star-filled" data-index="1"></div>
                                <div className="star-review star-default star-empty star-filled" data-index="2"></div>
                                <div className="star-review star-default star-empty" data-index="3"></div>
                                <div className="star-review star-default star-empty" data-index="4"></div>
                                <div className="star-review star-default star-empty" data-index="5"></div>
                              </div>
                              <p><span id="review-value">5</span> <span
                                id="review-value-text"> <strong> stars: </strong>Excellent</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>
                      <div className="form__content">
                        <p className="lead mt-3 mb-0">Write your title</p>
                        <input className="form-control" type="text" id="title" name="title"
                               value="hello" onChange={console.log} required={true}/>
                        <p className="lead mb-0">Write your review</p>
                        <p id="note_review" className="">Your review content: <span id="noteReview"
                                                                                    className={'bad'}>Excellent</span>
                        </p>
                        <textarea className="form-control" name="content" id="content" rows={10}
                                  placeholder="Write your review here. Talk about your experience without using offensive language. Leave an honest, useful and constructive testimonial."
                        ></textarea>
                        <p className="lead mt-3 mb-0">Experience date</p>
                        <input className="form-control" type="date"
                               max={new Date().toISOString().substr(0, 10)} data-date-inline-picker="true"
                               name="experienceDate"
                               id="date"/>
                      </div>
                      <div className="form__footer">
                        <HCaptcha
                          ref={captchaRef}
                          sitekey={siteKey}
                          onVerify={token => setFieldValue("captcha", token)}
                        />
                        <span id="error"></span>
                        <div className="d-grid gap-2">
                          <button type="submit" className="btn-block btn btn-primary btn-lg text-uppercase text-right"
                                  id="btn">Publish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      );
    }
  );

  return <>
    <section className="py-5 form merchant">
      {siteKey && (
        <FormComponent
          ref={captchaRef}
          siteKey={siteKey}
          initialValues={{captcha: "", first_name: ""}}
          onSubmit={(values) => {
            console.log({values});
            // being that this was a success, we can then call resetCaptcha via the ref
            // Note: use optional chaining instead if possible - this is just to support older TS version
            captchaRef.current && captchaRef.current.resetCaptcha();
          }}
        />
      )}
    </section>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />

  </>
}

export default MerReviewFormReplaceWithAddMer
