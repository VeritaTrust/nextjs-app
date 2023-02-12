import moment from 'moment';
import {ReviewDto} from "@server/dto/ReviewDto";

type Props = {
  data: ReviewDto
}

function ReviewDiv({data}: Props) {
  let srcvalue = "star" + data.rating.toString();
  let srcimg = '/img/star-1.jpg';

  switch (srcvalue) {
    case "star1":
      srcimg = '/img/star-1.jpg';
      break;
    case "star2":
      srcimg = '/img/star-2.jpg';
      break;
    case "star3":
      srcimg = '/img/star-3.jpg';
      break;
    case "star4":
      srcimg = '/img/star-4.jpg';
      break;
    case "star5":
      srcimg = '/img/star-5.jpg';
      break;
  }

  return (
    <>
      <div className="bg-white p-3 mb-2 rounded-5 shadow aos animated aos-init aos-animate" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
        <div className="profil d-flex pb-2">
          <img src={'/img/star-1.jpg'} width="50" height="50"/>
          <div className="info ms-3">
            <p className="name lead mb-0">{data.first_name} {data.last_name}</p>
            <p className="analyse text-muted mb-0">{data.nbre} reviews • <i className="flaticon-location"></i> FR</p>
          </div>
        </div>
        <div className="notation d-lg-flex justify-content-between my-3">
          <div className="note small me-lg-3 mb-2">
            <div className="form__star d-flex justify-content-start">
              <div><img alt="Noté 5 sur 5 étoiles" src={srcimg} width="120" height="70"/></div>
            </div>
          </div>
          <div className="verified me-lg-3 mb-2">
            <button type="button" className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
                    data-bs-html="true" data-bs-trigger="focus" data-bs-toggle="popover" data-bs-placement="top"
                    data-bs-custom-class="veritatrust-popover"
                    data-bs-title="<i class='flaticon-cube-3d me-1'></i> Verified via Blockchain"
                    data-bs-content="We use the blockchain to track and verify the transaction. <br><a href='https://goerli.etherscan.io/tx/' target='_blank'>View the onchain transaction</a> | <a href='#' target='_blank'>What is Blockchain?</a>">
              <span className="text-white"><i className="flaticon-cube-3d me-1"></i> Verified via Blockchain</span></button>
          </div>
          <div className="date text-primary ms-auto">{moment(data.experienceDate).format("MMM DD, YYYY")}</div>
        </div>
        <div className="content mb-2">
          <h3>{data.title}</h3>
          <p className="text-muted">{data.content}
          </p>
        </div>
        <div className="related_product">
          <h4 className="h5">{data.titreprodreview}</h4>
          <div className="d-flex">
            <div className="photo"><img
              src="https://asset1.cxnmarksandspencer.com/is/image/mands/PL_05_T34_1316A_T4_X_EC_0?$PDP_IMAGEGRID_ZOOM_XLG$"
              alt=""/></div>
            <div className="related_content">
              <p className="text-primary mb-0">{data.contentpr}</p>
              <p className="mb-0">({data.first_name}) has rated this {data.product_id} {data.ratingp}/5</p>
              <a className="btn btn-secondary btn-sm mt-2" href="#">All reviews for this product</a>
            </div>
          </div>
        </div>
        <div className="share d-flex justify-content-around">
          <div>
            <a href="#"><i className="flaticon-heart"></i> Useful</a></div>
          <div className="share"><a href="#"><i className="flaticon-network"></i> Share</a></div>
          <div className="flag"><a href="#" aria-label="flag"><i className="flaticon-red-flag"></i></a></div>
        </div>
      </div>
    </>
  )
}

export default ReviewDiv;
