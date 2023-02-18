import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, {forwardRef, useState} from "react";
import {Form, Formik, FormikConfig, FormikErrors, FormikHelpers, FormikValues} from "formik";
import {ToastContainer} from "react-toastify";
import {GetServerSideProps} from "next";
import {PrismaClient} from "@prisma/client";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MerchantProfileMapper} from "@server/mappers";
import {MerchantProfileDto} from "@server/dto/MerchantProfileDto";
import {DEFAULT_RATING_STAR, RATING_STAR_TEXTS} from "../../helpers/const";
import Head from "next/head";
import {AddMerchantReviewDto} from "@server/dto/request/AddMerchantReviewDto";
import {useRouter} from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Stars from "../../components/stars";
import {useTranslation} from "next-i18next";

interface SiteProps {
  merchantProfile: MerchantProfileDto;
}

interface FormComponentProps extends FormikConfig<FormikValues> {
  siteKey: string;
}

interface FormValues {
  captcha: string;
  title: string;
  content: string;
}

const MerchantName = ({merchantProfile}: SiteProps) => {
  //const [siteKey] = useState<string>("1be3a25e-95cb-441d-a951-f140b9e09428");
  console.log('ENV???', process.env.NEXT_PUBLIC_HCAPTCHA_ID)
  const {t: translate} = useTranslation('common');
  //const [siteKey] = useState<string>("10000000-ffff-ffff-ffff-000000000001"); // TEST
  const [siteKey] = useState<string>(process.env.NEXT_PUBLIC_HCAPTCHA_ID as string);
  const captchaRef = React.createRef<HCaptcha>();
  const [rating, setRating] = useState<number>(DEFAULT_RATING_STAR)
  const router = useRouter();

  // eslint-disable-next-line react/display-name
  const FormComponent = forwardRef<HCaptcha, FormComponentProps>(
    ({siteKey, ...formikProps}, captchaRef) => {
      return (
        <div style={{marginTop: 30}}>
          <Formik
            {...formikProps}
            validate={({title}) => {
              let errors: FormikErrors<FormValues> = {};
              if (!title) {
                errors.title = "Enter title please!";
              }
              return errors;
            }}
          >
            {({
                setFieldValue,
                handleSubmit,
                isSubmitting,
              }) => (
              <Form onSubmit={handleSubmit}>
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                      <h3>Rate your experience <br/>
                        <Link
                          href={merchantProfile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {merchantProfile.name}
                        </Link>
                      </h3>
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
                            <Image
                              src={merchantProfile.logo}
                              alt="Merchant name"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="col-12 col-md-8 col-xl-9">
                            <div className="form__header__note">
                              <p className="lead">Rate your experience</p>
                              <Stars rating={rating} setRating={(num: number) => setRating(num)}/>
                              <p>
                                <span><strong>{`${rating} ${translate('stars')}: `}</strong>{RATING_STAR_TEXTS[rating - 1]}</span>
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
                          <button disabled={isSubmitting} type="submit"
                                  className="btn-block btn btn-primary btn-lg text-uppercase text-right"
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
    <Head>
      <meta name="description" content="Merchant Review Form - please append a new review, share experience"/>
      <title>Veritatrust - Merchant Review Form</title>
    </Head>
    <main>
      <section className="py-5">
        {siteKey && (
          <FormComponent
            ref={captchaRef}
            siteKey={siteKey}
            initialValues={{captcha: "", title: "", content: ""}}
            onSubmit={(values, {setSubmitting}: FormikHelpers<FormikValues>) => {
              console.log({values});
              console.log(captchaRef.current);
              captchaRef.current && captchaRef.current.resetCaptcha();
              setTimeout(() => {
                axios
                  .post<AddMerchantReviewDto>(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/merchants/${merchantProfile.id}/reviews`,
                    values
                  )
                  .then(() => router.push('/valid-review'))
                  // TODO: catch error case what to do?
                  .catch(console.log)
                  .finally(() => setSubmitting(false))
              }, 2000);
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
    </main>
  </>
}

export const getServerSideProps: GetServerSideProps<SiteProps> = async (
  context
) => {
  try {
    const merchantName = context.params?.merchantName as string;

    if (!merchantName) {
      throw Error('NO PROFILE FOUND TO WRITE REVIEW');
    }

    const profile = await new PrismaClient().merchantProfile.findUniqueOrThrow({
      where: {
        name: merchantName,
      },
    });

    return {
      props: {
        ...(await serverSideTranslations(context.locale as string, ['common'])),
        merchantProfile: MerchantProfileMapper.toDto(profile),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default MerchantName
