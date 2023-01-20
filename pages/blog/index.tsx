import ProductReview from "../../components/product-review";
import LastReview from "../../components/last-review";
import StateProfile from "../../components/state-profile";
import ServiceReview from "../../components/service-review";
import SearchProduct from "../../components/search-product";
import UserReward from "../../components/user-reward";

function Blog() {
  const datareview = {
    fName: "fatah",
    lName: "ahmed",
    title: "congratulations",
    content: "Its very nice",
    productName: "dell-universal-dock-d6000s",
    reviewNb: 4,
    location: "MA",
    experienceDate: "jun 16, 2022",
    imgsrc: ["img1", "img2"]
  }

  const dreview = {
    fName: "fatah",
    lName: "ahmed",
    title: "congratulations",
    content: "Its very nice",
    reviewNb: 4,
    location: "MA",
    experienceDate: "jun 16, 2022"
  }

  const lReview = {
    prName: "fatah",
    orderId: "ahmed",
    content: "Its very nice",
    status: "complete",
    rating: 4,
    reward: 0.16,
    reviewType: "product review",
    experienceDate: "jun 13, 2022"
  }

  const UserRewardData = {
    fName: "fatah",
    lName: "ahmed",
    totalReward: 4.6,
    approuvedRaward: 3.2,
    pendingReward: 1.4,
    levelAccount: 2,
    fLevelAccount: 3,
    reviewNb: 21
  }

  const stateAccount = {
    isBasicInfo: true,
    isKYC: true,
    isMetamask: false
  }

  return (<>
    <h1>
      Blog
    </h1>

    <section className="search_results bg-success pb-5">
      <div className="container">
        <div className="row">
          <div className="col-11 col-md-12 col-lg-8 py-4 mx-auto">
            <SearchProduct productName="dell npos auto sn esg 5y keep your hd for enterprise" reviewNb="3"/>
          </div>

        </div>

      </div>

    </section>

    <section className="bg-success profil-main">
      <div className="container py-2 py-lg-5">
        <div className="row">
          <div className="col-lg-8">

            <div className="reviews-list">
              <ProductReview data={datareview}/>
              <ServiceReview data={dreview}/>
            </div>

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

                <div className="mb-4 bg-white shadow rounded-5 p-4 aos animated aos-init aos-animate" data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom">
                  <p className="lead">Your last reviews</p>
                  <table className="table mb-3">
                    <thead>
                    <tr>
                      <th className="review-date" scope="col">Date</th>
                      <th className="review-details" scope="col">Details</th>
                      <th className="review-reward" scope="col">Reward</th>
                    </tr>
                    </thead>

                    <LastReview data={lReview}/>

                  </table>

                  <UserReward data={UserRewardData}/>
                  <StateProfile data={stateAccount}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Blog;
