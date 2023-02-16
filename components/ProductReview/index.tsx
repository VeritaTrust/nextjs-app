import moment from 'moment';
import { OrganicProductReviewDto } from '@server/dto/OrganicProductReviewDto';

type Props = {
  productReview: OrganicProductReviewDto;
};

function ProductReview({ productReview }: Props) {
  let srcvalue = 'star' + productReview.rating.toString();
  let srcimg = '/img/star-1.jpg';

  switch (srcvalue) {
    case 'star1':
      srcimg = '/img/star-1.jpg';
      break;
    case 'star2':
      srcimg = '/img/star-2.jpg';
      break;
    case 'star3':
      srcimg = '/img/star-3.jpg';
      break;
    case 'star4':
      srcimg = '/img/star-4.jpg';
      break;
    case 'star5':
      srcimg = '/img/star-5.jpg';
      break;
  }

  return (
    <>
      <div
        className="bg-white p-3 mb-2 rounded-5 shadow aos animated aos-init aos-animate"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="profil d-flex pb-2">
          <img
            alt="product review"
            src={'/img/star-0.jpg'}
            width="50"
            height="50"
          />
          <div className="info ms-3">
            <p className="name lead mb-0">
              FIRSTNAME? LASTNAME? TODO: brk Fatah
            </p>
            <p className="analyse text-muted mb-0">
              NBR?? TODO reviews • <i className="flaticon-location"></i> FR
            </p>
          </div>
        </div>
        <div className="notation d-lg-flex justify-content-between my-3">
          <div className="note small me-lg-3 mb-2">
            <div className="form__star d-flex justify-content-start">
              <div>
                <img
                  alt="Noté 5 sur 5 étoiles"
                  src={srcimg}
                  width="120"
                  height="70"
                />
              </div>
            </div>
          </div>
          <div className="verified me-lg-3 mb-2">
            <button
              type="button"
              className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
              data-bs-html="true"
              data-bs-trigger="focus"
              data-bs-toggle="popover"
              data-bs-placement="top"
              data-bs-custom-class="veritatrust-popover"
              data-bs-title="<i className='flaticon-cube-3d me-1'></i> Verified via Blockchain"
              data-bs-content="We use the blockchain to track and verify the transaction. <br><a href='https://goerli.etherscan.io/tx/' target='_blank'>View the onchain transaction</a> | <a href='#' target='_blank'>What is Blockchain?</a>"
            >
              <span className="text-white">
                <i className="flaticon-cube-3d me-1"></i> Verified via
                Blockchain
              </span>
            </button>
          </div>
          <div className="date text-primary ms-auto">
            {moment(productReview.experienceDate).format('MMM DD, YYYY')}
          </div>
        </div>
        <div className="content mb-2">
          <p>
            <span className="badge bg-primary">
              {productReview.productName}
            </span>
          </p>
          <h3>{productReview.title} </h3>
          <p className="text-muted">{productReview.content}</p>
          <ul className="d-flex">
            {productReview.imageVideo &&
              productReview.imageVideo.split(',').map((image, index) => (
                <li key={index}>
                  <a href="#">
                    <img src={image} alt="Reviews" height="100" width="100" />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="share d-flex justify-content-around">
          <div className="recommanded">
            <a href="#">
              <i className="flaticon-heart"></i> Useful
            </a>
          </div>
          <div className="share">
            <a href="#">
              <i className="flaticon-network"></i> Share
            </a>
          </div>
          <div className="flag">
            <a href="#" aria-label="flag">
              <i className="flaticon-red-flag"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductReview;
