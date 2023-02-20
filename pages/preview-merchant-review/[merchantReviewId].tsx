import {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';
import {PrismaClient} from "@prisma/client";

const PreviewMerchantReview: NextPage<Props> = ({name, id}) => {
  return (
    <>
      <Head>
        <meta name="description" content="DESC REVIEW MERCHANT TODO" />
        <title>Veritatrust - BLOG</title>
      </Head>
      <main>
        {name} - 
        {id}
      </main>
    </>
  );
};

type Props = {
  name: string;
  id: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

  const merchantReviewId = context.params?.merchantReviewId as string;

  try {
    const a = await new PrismaClient().merchantReview.findUnique({
      where: {
        id: Number(merchantReviewId)
      }
    })

    console.log(a)

    if (!a?.id) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        name: a.title,
        id: a.id.toString(),
      }
    }

  } catch (e) {
    console.error(e)
    return {
      notFound: true
    }
  }



  return {
    props: {
      name: 'burak',
      id: merchantReviewId
    }
  }
}

export default PreviewMerchantReview;
