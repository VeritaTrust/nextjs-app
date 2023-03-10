import Head from 'next/head';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import axios from 'axios';
import Categories from '../components/Categories';
import ScrollReview from '../components/ScrollReview';
import {ReviewDto} from '@server/dto/ReviewDto';
import Script from 'next/script';
import {PrismaClient} from '@prisma/client';

const dreview: ReviewDto = {
  fName: 'Aissata',
  lName: 'Kane',
  entity: 'F.A Squad',
  rating: 4,
  content:
    'ipsum dolor sit amet consectetur adipisicing elit. Quam recusandae dignissimos possimus aliquam, officiis neque tenetur quibusdam nisi culpa accusamus quae voluptates commodi libero, dolore distinctio est repellat a voluptatem.',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Veritatrust</title>
        <meta name="description" content="Generated by create next app - veritatrust"/>
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.6.1.js"
        integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
        crossOrigin="anonymous"
      ></Script>
      <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></Script>
      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
      <Script type="text/javascript" src="/js/owl.carousel.js"></Script>
      <Script type="text/javascript" src="/js/custom.js" defer></Script>
      <main>
        <div className={'row d-flex gap-4 p-4'}>
          <Link href={'add-merchant-review?invitation=invkaraoglan-12345-istanbul'}>MERCHANT REVIEW</Link>
          <Link href={'add-product-review/TV-SAMSUNG'}>PRODUCT REVIEW</Link>
          <Link href={'preview-merchant-review/1'}>PREVIEW MERCHANT REVIEW</Link>
          <Link href={'transaction/1'}>TRANSACTION</Link>
          <Link href={'blog'}>BLOG</Link>
          <Link href={'product-review'}>PRODUCT REVIEW</Link>
          <Link href={'resources'}>RESOURCES</Link>
          <Link href={'review'}>review</Link>
          <Link href={'review-merchant?website=BRUAKKAROGLAN.com'}>review-merchant</Link>
          <Link href={'valid-review'}>valid-review</Link>
        </div>

        <section className="py-5 home__hero">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 py-5">
                <h1 className="display-2">
                  <span className="text-primary">Trusted Reviews</span> on the{' '}
                  <span>Blockchain</span>
                </h1>
                <p className="lead">
                  VeritaTrust is a decentralized &amp; transparent customer
                  feedback on the Blockchain.
                </p>
                <p className="lead text-green">
                  Share your genuine experience and get rewards.
                </p>
                <Link
                  className="btn btn-success btn-lg me-4 text-white px-5"
                  href="/Explore"
                >
                  Explore
                </Link>
                <Link
                  className="btn btn-outline-primary btn-lg px-5"
                  href="/Create"
                >
                  Create
                </Link>
              </div>
              <div className="col-lg-6 py-5">
                <img src={'/img/reviews-homepage.jpg'} alt="reviews"/>
              </div>
            </div>
          </div>
        </section>
        <Categories/>
        <div className="col-lg-6 mx-auto">
          <p className="lead text-center">
            Looking for a specific review ?<br/>
            Look for reviews about the product you want.
          </p>
          <a className="btn btn-primary w-100" href="#">
            See all reviews
          </a>
        </div>
        <section className="home__logos bg-success py-3">
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
              <div className="col-6 col-lg-2 text-center mb-3">
                <img
                  className=""
                  src={'/img/lorem-portrait.jpg'}
                  alt=""
                  height="60"
                  width="60"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home__reviews py-5">
          <div className="container">
            <div className="row mb-4">
              <h4 className="display-6 text-success">Recent Reviews</h4>
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="owl-carousel">
                <div className="item">
                  <ScrollReview review={dreview}/>
                  <ScrollReview review={dreview}/>
                </div>
                <div className="item">
                  <ScrollReview review={dreview}/>
                  <ScrollReview review={dreview}/>
                </div>
                <div className="item">
                  <ScrollReview review={dreview}/>
                  <ScrollReview review={dreview}/>
                </div>
                <div className="item">
                  <ScrollReview review={dreview}/>
                  <ScrollReview review={dreview}/>
                </div>
              </div>
              {/* TODO: brk replaceowl with next compatible or migrate it */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const wr = await new PrismaClient().merchantProfile.findMany({
      include: {
        reviews: true,
      },
    });
    console.dir(wr, {depth: null});

    const {data} = await axios.get(`http://localhost:3000/api`);
    console.log('NAME', data);
    /*
    const userRepo = sequelize.getRepository(User)
    const a = await userRepo.findAll<User>()
    console.log('!AAA from getServerSideProps!', a)
*/
    return {props: {name: 'BURAK'}};
  } catch (error) {
    console.log(error);
    return {props: {name: 'BURAK'}};
  }
};
