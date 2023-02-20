import {NextPage} from 'next';
import Head from 'next/head';
import Confetti from 'react-confetti';
import {useEffect, useState} from "react";

const ValidReview: NextPage = () => {
  const [colors] = useState(['#02a68a', '#789456', '#333333', '#002d6b'])
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }, [])
  
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app"/>
        <title>Veritatrust Product Valid Review Page</title>
      </Head>
      <main>
        <section className="py-5 form valid">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-11 col-lg-8 pt-3 mx-auto text-center">

                <p>Thanks for your reviews. your tokens waiting for you</p>
              </div>
              <div className="col-11 col-lg-8 py-3 mx-auto position-relative">
                <ul className="step-reviews nav text-center">
                  <li className="nav-item w-33 step-1 done">

                    <span className="badge rounded-circle">1</span>
                    <p className="mb-0">Your merchant <br/>review</p>
                  </li>
                  <li className="nav-item w-33 step-2 done">
                    <span className="badge rounded-circle">2</span>
                    <p className="mb-0">your product <br/>review</p>
                  </li>
                  <li className="nav-item w-33 step-3 active">
                    <span className="badge rounded-circle">3</span>
                    <p className="mb-0" aria-current="page">Reviews<br/>valided</p>
                  </li>
                </ul>
                <div id="line">
                  <div id="line-progress"></div>
                </div>
              </div>
              <div className="col-11 col-lg-8 py-4 px-lg-4 mx-auto result-ok">
                <div className="form__header">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-8 col-xl-9 text-center">
                      <img className="align-self-center mb-4" src="http://dev.veritatrust.com/assets/img/coin.png"
                           alt="Product name"/>
                      <p className="lead text-green">Congratulations!<br/>Your review is validated</p>
                      <p className="">You just got rewarded with <strong>1 token 🤑</strong> for your review. Get more
                        reward and review more.</p>
                      <p className="lead text-green">Get more reward and review more.</p>
                      <a className="btn btn-primary" href="#">Review your Products recently buy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {width && height ? <Confetti
            width={width}
            height={height}
            numberOfPieces={200}
            colors={colors}
          /> : <></>}
        </section>
      </main>
    </>
  );
};

export default ValidReview;
