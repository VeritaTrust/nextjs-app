import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import Head from 'next/head';
import Filtering from '../components/Filtering';
import ProductDiv from '../components/ProductDiv';
import { OrganicProductReviewDto } from '@server/dto/OrganicProductReviewDto';
import ProductReview from './product-review';
import { useState } from 'react';

interface Props {
  productName: string;
  organicProductReviews: OrganicProductReviewDto[];
}

const Resources: NextPage<Props> = ({ productName, organicProductReviews }) => {
  const [rating, setRating] = useState(0);

  return (
    <>
      <Head>
        <meta name="description" content="DESC REVIEW MERCHANT TODO" />
        <title>Veritatrust - Resources</title>
      </Head>
      <main>
        <>
          <ProductDiv productName={productName} />
          <section className="bg-success profil-main">
            <div className="container py-2 py-lg-5">
              <div className="row">
                <div className="col-lg-8">
                  {rating}
                  <Filtering onFilterChange={(rating: number) => setRating(rating)}/>
                  <div className="reviews-list">
                    <div>
                      {organicProductReviews.map((review, index) => (
                        <ProductReview key={index} productReviewObj={review} />
                      ))}
                    </div>
                  </div>
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

  const productName = context.query.productName as string;

  try {
    if (!productName) {
      throw Error('NO productName QUERY FOUND!');
    }

    const { data } = await axios.get(
      `http://localhost:3000/api/organicProductReviews?productName=${productName}`
    );
    console.log('MEREMREME', data);
    const a = data as OrganicProductReviewDto[];
    return { props: { productName, organicProductReviews: a } };
  } catch (error) {
    console.log(error);

    // TODO: brk default?
    return {
      notFound: true,
    };
    //return {props: {merchantReview: {}}};
  }
};

export default Resources;
