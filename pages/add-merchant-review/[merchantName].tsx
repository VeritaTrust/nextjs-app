import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import {useEffect, useRef, useState} from "react";
import {PrismaClient} from "@prisma/client";
import {MerchantProfileDto} from "@server/dto/MerchantProfileDto";
import {MerchantProfileMapper} from "@server/mappers";
import Image from "next/image";
import Link from "next/link";
import {Field, Formik, FormikHelpers} from "formik";
import axios from "axios";
import {AddMerchantReviewDto} from "@server/dto/request/AddMerchantReviewDto";
import {useRouter} from 'next/navigation';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

type NoteSize = {
  80: NoteDetail;
  160: NoteDetail;
  240: NoteDetail;
  320: NoteDetail;
  400: NoteDetail;
}

type NoteDetail = {
  title: string;
  className: string;
}

const noteByTextSize: NoteSize = {
  80: {title: 'Weak', className: 'bad'},
  160: {title: 'Average', className: 'not_bad'},
  240: {title: 'Good', className: 'good'},
  320: {title: 'Very Good', className: 'very_good'},
  400: {title: 'Excellent', className: 'excellent'},
};

enum textSizeByNote {
  BAD = 80,
  NOT_BAD = 160,
  GOOD = 240,
  VERY_GOOD = 320,
  EXCELLENT = 400
}

interface Props {
  merchantProfile: MerchantProfileDto;
  textAreaId: number;
}

// TODO WHY NEEDED textAreaID FATAH?
const AddMerchantReview: NextPage<Props> = ({textAreaId, merchantProfile}: Props) => {

  const router = useRouter();
  const {t: translate} = useTranslation('about')
  console.log('TR', translate('about_us_text'))

  const [text, setText] = useState('');
  const [note, setNote] = useState(noteByTextSize[textSizeByNote.BAD]);
  const [previousClassName, setPreviousClassName] = useState(noteByTextSize[textSizeByNote.BAD].className);
  // TODO: below any
  const [noteReview, setNoteReview] = useState<any>(null);
  const [ratingReview, setRatingReview] = useState(0);

  /* TODO: useEffect(() => {
    const textArea = document.getElementById("content");
    if (!textArea) {
      console.log(textArea);
      throw new Error(`The textarea element with id ${textAreaId} does not exist`);
    }

    const ReviewNote = document.getElementById("noteReview");

    setNoteReview(ReviewNote);

    textArea.addEventListener('input', handleInput);
    return () => textArea.removeEventListener('input', handleInput);
  }, []);*/

  const handleInput = (e: any) => {
    const text = e.target.value.trim();
    setText(text);

    const textLength = text.length;
    const currentNote = getNoteByTextSize(textLength) as any;
    setNote(currentNote);

    if (previousClassName === currentNote.className) return;

    noteReview.classList.remove(previousClassName);
    noteReview.classList.add(currentNote.className);
    setPreviousClassName(currentNote.className);

  };

  const getNoteByTextSize = (textLength: number) => {
    if (textLength < textSizeByNote.BAD) {
      return noteByTextSize[textSizeByNote.BAD];
    }

    for (let key in textSizeByNote) {
      if (textLength < Number(textSizeByNote[key].toString())) {
        // TODO return noteByTextSize[textSizeByNote[key] as any];
        return null;
      }
    }

    return noteByTextSize[textSizeByNote.EXCELLENT];
  };

  // Reviews stars


  const merchandRef = useRef(null);
  const reviewValueRef = useRef(null);
  const reviewValueTextRef = useRef(null);


  useEffect(() => {
    const merchand = merchandRef.current as any; // TODO: brk
    if (merchand) {
      const stars = merchand.querySelectorAll('.star-review');
      const reviewValue = reviewValueRef.current as any;
      const reviewValueText = reviewValueTextRef.current as any;
      const starsArray = Array.from(stars) as any[];
      starsArray.forEach((star, index) => {
        fillStarsWithSelectedValue(index + 1);
        handleClickOnReview(star);
        handleHoverOnReview(star);
      });

      function handleHoverOnReview(star: any) {
        star.addEventListener('mouseover', () => {
          const rating = star?.dataset?.index;
          fillStars(rating);
          emptyStars(rating);
        });

        star.addEventListener('mouseout', () => {
          const rating = star?.dataset?.index;
          emptyStars(rating);
          fillStarsWithSelectedValue(merchand.dataset.selected);
        });
      }

      function handleClickOnReview(star: any) {
        star.addEventListener('click', () => {
          const rating = star?.dataset?.index;
          fillStars(rating);
          emptyStars(rating);
          merchand.dataset.selected = rating;

          setRatingReview(rating);

          reviewValue.innerHTML = rating;
          if (rating === 1)
            reviewValueText.innerHTML = ' <strong> star: </strong>Very bad';
          if (rating === 2)
            reviewValueText.innerHTML = ' <strong> stars: </strong>Bad';
          if (rating === 3)
            reviewValueText.innerHTML = ' <strong> stars: </strong>Average';
          if (rating === 4)
            reviewValueText.innerHTML = ' <strong> stars: </strong>Good';
          if (rating === 5)
            reviewValueText.innerHTML = ' <strong> stars: </strong>Excellent';
        });
      }

      function fillStarsWithSelectedValue(index: any) {
        if (Number(index) !== Number(merchand.dataset.selected)) return;
        fillStars(Number(merchand.dataset.selected));
        emptyStars(Number(merchand.dataset.selected));
      }

      function emptyStars(rating: any) {
        const afterStar = starsArray.filter(
          (s) => Number(s.dataset.index) > Number(rating)
        );
        afterStar.forEach((s) => s.classList.remove('star-filled'));
      }

      function fillStars(rating: any) {
        const beforeStar = starsArray.filter(
          (s) => Number(s.dataset.index) <= Number(rating)
        );

        beforeStar.forEach((s) => s.classList.add('star-filled'));
      }
    }

  }, []);


  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app"/>
        <title>Veritatrust - Merchant Review</title>
      </Head>
      <main>
        {/* TODO: for validation use YUP */}
        <Formik
          initialValues={{title: '', content: ''}}
          onSubmit={(values, {setSubmitting}: FormikHelpers<FormValues>) => {
            setTimeout(() => {
              axios.post<AddMerchantReviewDto>(
                `${process.env.NEXT_PUBLIC_API_URL}/api/merchants/${merchantProfile.id}/reviews`, values)
                .then((e) => router.push('/valid-review'))
                // TODO: navigate valid review
                .catch(console.log)
                .finally(() => setSubmitting(false))
            }, 2000)


            /*

            e.preventDefault();

  title.current.value = '';
  content.current.value = '';
  experienceDate.current.value = '';

  setReviewObj({
    title: '',
    content: '',
    rating: 0,
    experienceDate: new Date()
  })
             */
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
              /* and other goodies */
            }) => (
            <form className="row d-flex align-items-center" id="review_form" onSubmit={handleSubmit}>
              <div className="container">

                <div className="row d-flex align-items-center">
                  <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
                    <h3>Rate your experience
                      <Link href={merchantProfile.website}
                            target="_blank"
                            rel="noopener noreferrer">{merchantProfile.name}</Link>
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
                          <Image src={merchantProfile.logo} alt="Merchant name" width={100} height={100}/>
                        </div>
                        <div className="col-12 col-md-8 col-xl-9">
                          <div className="form__header__note">
                            <p className="lead">Rate your experience</p>
                            <div className="form__star mb-3 d-flex justify-content-start" id="review"
                                 data-review="merchand"
                                 ref={merchandRef} data-selected="2">

                              <div className="star-review star-default star-empty star-filled" data-index="1"></div>
                              <div className="star-review star-default star-empty star-filled" data-index="2"></div>
                              <div className="star-review star-default star-empty" data-index="3"></div>
                              <div className="star-review star-default star-empty" data-index="4"></div>
                              <div className="star-review star-default star-empty" data-index="5"></div>

                            </div>

                            <p><span id="review-value" ref={reviewValueRef}>{ratingReview}</span> <span
                              id="review-value-text"
                              ref={reviewValueTextRef}> <strong> stars: </strong>{note.title}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="form__content">
                      <p className="lead mt-3 mb-0">Write your title</p>
                      <input
                        className="form-control" id="title"
                        required={false}
                        type="title"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                      />
                      {errors.title && touched.title}

                      <p className="lead mb-0">Write your review</p>
                      <p id="note_review" className="">Your review content: <span id="noteReview"
                                                                                  className={note.className}>{note.title}</span>
                      </p>

                      <Field
                        required={false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.content}
                        placeholder="Write your review here. Talk about your experience without using offensive language. Leave an honest, useful and constructive testimonial."
                        id="content"
                        name="content" rows={10}
                        className="form-control"
                        component={'textarea'}
                      />
                      {errors.content && touched.content}

                      <p className="lead mt-3 mb-0">Experience date</p>
                      <input className="form-control" type="date" max="2023-02-02" data-date-inline-picker="true"
                             name="experienceDate" id="date" required={false}
                             onChange={handleChange}/>
                      {/*ref={experienceDate} ABOVE
                             value={reviewObj.experienceDate?.toString()}*/}
                    </div>
                    <div className="form__footer">
                      <span id="error"></span>
                      <div className="d-grid gap-2">
                        <button disabled={isSubmitting} type="submit"
                                className="btn-block btn btn-primary btn-lg text-uppercase text-right"
                                id="btn">
                          {isSubmitting ? <><span className="spinner-grow spinner-grow-sm" role="status"
                                                  aria-hidden="true"></span>
                            Submitting...</> : `Publish`}

                        </button>

                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </form>
          )}
        </Formik>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  console.log('ENVENEN', process.env.ENV)
  try {
    //const a = await UserRepository.findAllRaw();
    // console.log('!!A', a)

    /*    const {data} = await axios.get(
          `http://localhost:3000/api/hello`,
        );
        console.log('NAME', data);/*/

    const merchantName = context.params?.merchantName as string;

    if (!merchantName) {
      throw Error('NO PROFILE FOUND TO WRITE REVIEW')
    }

    const profile = await new PrismaClient().merchantProfile.findUniqueOrThrow({
      where: {
        name: merchantName
      }
    });

    return {
      props: {
        ...(await serverSideTranslations(context.locale as string, [
          'about',
        ])),
        textAreaId: 1, merchantProfile: MerchantProfileMapper.toDto(profile)
      }
    };
  } catch (error) {
    console.log(error)
    return {
      notFound: true
    };
  }
}

interface FormValues {
  title: string;
  content: string;
}

export default AddMerchantReview;
