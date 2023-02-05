import {GetServerSideProps, NextPage} from "next";
import axios from "axios";
import Head from "next/head";
import { OrganicMerchantReviewDto } from "@server/dto"
interface Props {
  merchantReview: OrganicMerchantReviewDto
}

const ReviewMerchant: NextPage<Props> = ({merchantReview}) => {
  console.log('REV IN HTML', merchantReview)
  return (
    <>
      <Head>
        <meta name="description" content="DESC REVIEW MERCHANT TODO"/>
        <title>Veritatrust - Review Merchant page</title>
      </Head>
      <main>
        SELAM
        {merchantReview.content}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  //console.log('AA!', context);

  const website = context.query.website;

  try {
    if (!website) {
      throw Error('NO WEBSITE QUERY FOUND!')
    }
    const {data} = await axios.get(
      `http://localhost:3000/api/merchantReviews`,
    );
    console.log('MEREMREME', data);
    const a = data as OrganicMerchantReviewDto
    return {props: { merchantReview: a }};
  } catch (error) {
    console.log(error)
    return {
      notFound: true
    };
  }
}

export default ReviewMerchant;
