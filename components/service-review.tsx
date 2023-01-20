interface Review {
  data: {
    lName: string;
    fName: string;
    reviewNb: string;
    location: string;
    productName: number,
    title: number,
    content: string;
    experienceDate: string;
    imgsrc: [];
  }
}


function ServiceReview({data}: Review) {
  return (
    <>
      <div className="bg-white p-3 mb-2 rounded-5 shadow aos animated aos-init aos-animate" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">

        <div className="profil d-flex pb-2">
          <img src={'star-1.png'} width="50" height="50"/>
          <div className="info ms-3">
            <p className="name lead mb-0">{data.fName} {data.lName}</p>
            <p className="analyse text-muted mb-0">{data.reviewNb} reviews • <i
              className="flaticon-location"></i> {data.location}</p>
          </div>
        </div>
        <div className="notation d-lg-flex justify-content-between my-3">
          <div className="note small me-lg-3 mb-2">
            <div className="form__star d-flex justify-content-start">
              <div><img alt="Noté 5 sur 5 étoiles" src={'/star-5.png'} width="120" height="70"/></div>
            </div>
          </div>
          <div className="verified me-lg-3 mb-2">
            <button type="button" className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
                    data-bs-html="true" data-bs-trigger="focus" data-bs-toggle="popover" data-bs-placement="top"
                    data-bs-custom-classname="veritatrust-popover"
                    data-bs-title="<i className='flaticon-cube-3d me-1'></i> Verified via Blockchain"
                    data-bs-content="We use the blockchain to track and verify the transaction. <br><a href='https://goerli.etherscan.io/tx/' target='_blank'>View the onchain transaction</a> | <a href='#' target='_blank'>What is Blockchain?</a>">
              <span className="text-white"><i className="flaticon-cube-3d me-1"></i> Verified via Blockchain</span>
            </button>
          </div>
          <div className="date text-primary ms-auto">{data.experienceDate}</div>
        </div>
        <div className="content mb-2">
          <h3>{data.title} </h3>
          <p className="text-muted">{data.content}
          </p>

        </div>
        <div className="share d-flex justify-content-around">
          <div className="recommanded">
            <a href="#"><i className="flaticon-heart"></i> Useful</a></div>
          <div className="share"><a href="#"><i className="flaticon-network"></i> Share</a></div>
          <div className="flag"><a href="#" aria-label="flag"><i className="flaticon-red-flag"></i></a></div>
        </div>
      </div>
    </>
  )
}

export default ServiceReview;
