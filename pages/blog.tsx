import { NextPage } from 'next';
import Head from 'next/head';
import { OrganicProductReviewDto } from '@server/dto/OrganicProductReviewDto';
import SearchProduct from '../components/SearchProduct';
import ReviewDiv from '../components/ReviewDiv';
import { ReviewDto } from '@server/dto/ReviewDto';
import LastReview from '../components/LastReview';
import UserReward from '../components/UserReward';
import StateProfile from '../components/StateProfile';
import { UserRewardDto } from '@server/dto/UserRewardDto';
import { ProfileStateDto } from '@server/dto/ProfileStateDto';

interface Props {
  productName: string;
  organicProductReviews: OrganicProductReviewDto[];
}

const datareview: ReviewDto = {
  first_name: 'fatah',
  last_name: 'ahmed',
  title: 'congratulations',
  content: 'Its very nice',
  product_name: 'dell-universal-dock-d6000s',
  nbre: 4,
  location: 'MA',
  experienceDate: new Date('jun 16, 2022'),
  imgsrc: ['img1', 'img2'],
  pTitle: 'tilte product',
  pContent: 'contenu review product',
  rating: 4,
  titreprodreview: 'titreprodreview ?? TODO:',
  contentpr: 'contentpr? TODO:',
  entity: 'entity? TODO:',
  product_id: 1,
  ratingp: 2,
};

const lReview: ReviewDto = {
  prName: 'fatah',
  orderId: 'ahmed',
  content: 'Its very nice',
  status: 'complete',
  rating: 4,
  review_reward: 0.16,
  review_type: 'product review',
  experienceDate: new Date('jun 13, 2022'),
  first_name: 'fatah',
};

const UserRewardData: UserRewardDto = {
  fName: 'fatah',
  lName: 'ahmed',
  totalReward: 4.6,
  approuvedRaward: 3.2,
  pendingReward: 1.4,
  levelAccount: 2,
  fLevelAccount: 3,
  reviewNb: 21,
};

const stateAccount: ProfileStateDto = {
  isBasicInfo: true,
  isKyc: true,
  isMetamask: false,
};

const Blog: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <meta name="description" content="DESC REVIEW MERCHANT TODO" />
        <title>Veritatrust - BLOG</title>
      </Head>
      <main>
        <>
          <section className="search_results bg-success pb-5">
            <div className="container">
              <div className="row">
                <div className="col-11 col-md-12 col-lg-8 py-4 mx-auto">
                  <SearchProduct
                    product_name="dell-universal-dock-d6000s"
                    reviewNb="3"
                    type={'TYPE??TODO:brk'}
                  />
                  <SearchProduct
                    product_name="dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise"
                    reviewNb="6"
                    type={'TYPE??TODO:brk'}
                  />
                  <SearchProduct
                    product_name="startech-io-networking-4port-usb-2.0-hub-portable"
                    reviewNb="6"
                    type={'TYPE??TODO:brk'}
                  />

                  <ReviewDiv data={datareview}></ReviewDiv>
                </div>
              </div>
            </div>
          </section>

          <section className="page_content pb-5 bg-success">
            <div className="container">
              <div className="row">
                <div className="col-12 py-4 mx-auto">
                  <div className="row">
                    <div className="dashboard col-12 col-lg-9">
                      <div
                        className="mb-4 bg-white shadow rounded-5 p-4 aos animated aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <p className="lead">Your last reviews</p>
                        <table className="table mb-3">
                          <thead>
                            <tr>
                              <th className="review-date" scope="col">
                                Date
                              </th>
                              <th className="review-details" scope="col">
                                Details
                              </th>
                              <th className="review-reward" scope="col">
                                Reward
                              </th>
                            </tr>
                          </thead>

                          <LastReview data={lReview} />
                        </table>

                        <UserReward data={UserRewardData} />
                        <StateProfile data={stateAccount} />
                      </div>
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

export default Blog;
