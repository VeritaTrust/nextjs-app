import {GetServerSideProps, NextPage} from 'next';
import axios from 'axios';
import Head from 'next/head';
import {OrganicMerchantReviewDto} from '@server/dto';
import MerchantDiv from '../components/MerchantDiv';
import AboutMerchant from '../components/AboutMerchant';
import WriteReviewDiv from '../components/WriteReviewDiv';
import Filtering from '../components/Filtering';
import ServiceReview from '../components/ServiceReview';
import {useState} from "react";

interface Props {
  merchantReviews: OrganicMerchantReviewDto[];
}

const ReviewMerchant: NextPage<Props> = ({merchantReviews}) => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <Head>
        <meta name="description" content="DESC REVIEW MERCHANT TODO"/>
        <title>Veritatrust - Review Merchant page</title>
      </Head>
      <main>
        <>
          <MerchantDiv rm="3.8"/>

          <section className="bg-success profil-main">
            <div className="container py-2 py-lg-5">
              <div className="row">
                <div className="col-lg-8">

                  <WriteReviewDiv></WriteReviewDiv>
                  <Filtering onFilterChange={(rating: number) => setRating(rating)}/>

                  <div className="reviews-list">
                    <div>
                      {merchantReviews.map((review, index) => (
                        <ServiceReview key={index} merchantReview={review}/>
                      ))}
                    </div>

                  </div>

                </div>

                <div className="col-lg-4 text-end">
                  <AboutMerchant title="About www.fatasoft-consulting.com" description="We offer all the shoes and accessories you want, a wide range of fashionable products, and the best brands of the moment. A gigantic choice: Guess, Tommy Hilfiger, Ecco, Geox, Pepe Jeans,
                                 Clarks, Gino Rossi and many more... Shoes, bags, wallets and belts – all available to you 24/7. We are always here for you!"
                                 country="France" category="Services"/>

                </div>

              </div>

            </div>
          </section>
        </>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  //console.log('AA!', context);

  const website = context.query.website;

  try {
    if (!website) {
      throw Error('NO WEBSITE QUERY FOUND!');
    }
    const {data} = await axios.get(`/api/merchantReviews/${website}`);
    console.log('MEREMREME', data);
    const a = data as OrganicMerchantReviewDto[];
    return {props: {merchantReviews: a}};
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default ReviewMerchant;
