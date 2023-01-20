interface Review {
  data: {
    lName: string;
    fName: string;
    reviewNb: string;
    location: string;
    productName: number,
    title: number,
    approuvedRaward: number,
    pendingReward: number,
    totalReward: number,
    levelAccount: number,
    content: string;
    experienceDate: string;
    imgsrc: [];
  }
}

function UserReward({data}: Review) {

  let levelname = "Newbie";
  let levelValueClass = "value level level" + (data.levelAccount - 1).toString();
  switch (data.levelAccount) {
    case 1:
      levelname = "Newbie";
      break;
    case 2:
      levelname = "Bronze";
      break;
    case 3:
      levelname = "Silver";
      break;
    case 4:
      levelname = "Gold";
      break;
    case 5:
      levelname = "Platinum";
      break;
  }
  let levelnames = ["Newbie", "Bronze", "Silver", "Gold", "Platinum"]

  return (<>

    <div className="mb-4 bg-white shadow rounded-5 p-4 aos animated aos-init aos-animate" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">

      <h2>Welcome, {data.fName} {data.lName}</h2>

      <p className="lead">You have {data.totalReward} VeritaCoins (VT) in your wallet!</p>
      <div className="row mb-4">


        <div className="state col-md-6 d-flex justify-content-around mb-3">
          <div className="value approuved">
            <div className="icone"><i className="flaticon-cube-3d"></i></div>
            <div>
              <div className="number"><span>{data.approuvedRaward}</span> VT</div>
              <div className="state">Approuved</div>
            </div>
          </div>
          <div className="value pending">
            <div className="icone"><i className="flaticon-time-left"></i></div>
            <div>
              <div className="number"><span>{data.pendingReward}</span> VT</div>
              <div className="state">Pending</div>
            </div>
          </div>

          <div className={levelValueClass}>
            <div className="icone"><i className="flaticon-logo-level"></i></div>
            <div>
              <div className="state">{levelname}</div>
            </div>
          </div>
        </div>

        <div className="level-upgrade col-md-6">
          Your current level is <span className="level1" id="level-name">{levelname} Influencer</span> Reviewer. Want to
          level up to <span className="level2" id="level-next">{levelnames[data.levelAccount]} Influencer</span>? Just
          write <strong id="review-privilege">{data.reviewNb}</strong> more reviews and get new privileges!
        </div>

      </div>

      <div className="row">
        <div className="total col-12">
          In total, you got {data.totalReward} VeritaCoins (VT) since your registration. Well done! Want more rewards?
          Share your experience with the community and write a review.
        </div>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <a className="btn btn-success d-block mt-2 text-white" href="#">Add new review</a>
      </div>
    </div>
  </>)
}

export default UserReward;
