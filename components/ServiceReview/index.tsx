import moment from 'moment';

import Image from 'next/image';
import { OrganicMerchantReviewDto } from '@server/dto';

type Props = {
  merchantReview: OrganicMerchantReviewDto;
};

function ServiceReview({ merchantReview }: Props) {
  let srcvalue = 'star' + merchantReview.rating.toString();
  let srcimg = '/img/star-1.jpg';

  switch (srcvalue) {
    case "'/img/star-1.jpg'":
      srcimg = '/img/star-1.jpg';
      break;
    case "'/img/star-2.jpg'":
      srcimg = '/img/star-2.jpg';
      break;
    case "'/img/star-3.jpg'":
      srcimg = '/img/star-3.jpg';
      break;
    case "'/img/star-4.jpg'":
      srcimg = '/img/star-4.jpg';
      break;
    case "'/img/star-5.jpg'":
      srcimg = '/img/star-5.jpg';
      break;
  }

  return (
    <>
      <div
        className="bg-white p-3 mb-2 rounded-5 shadow aos animated aos-init aos-animate"
        merchantReview-aos="fade-up"
        merchantReview-aos-anchor-placement="top-bottom"
      >
        <div className="profil d-flex pb-2">
          <Image
            alt={'star image'}
            src={'/img/star-1.png'}
            width="50"
            height="50"
          />
          <div className="info ms-3">
            <p className="name lead mb-0">
              {merchantReview.first_name} {merchantReview.last_name}
            </p>
            <p className="analyse text-muted mb-0">
              {merchantReview.Nbre} reviews •{' '}
              <i className="flaticon-location"></i> {merchantReview.location}
            </p>
          </div>
        </div>
        <div className="notation d-lg-flex justify-content-between my-3">
          <div className="note small me-lg-3 mb-2">
            <div className="form__star d-flex justify-content-start">
              <div>
                <Image
                  alt="Noté 5 sur 5 étoiles"
                  src={srcimg}
                  width="120"
                  height="70"
                />
              </div>
            </div>
          </div>
          <div className="verified me-lg-3 mb-2">
            {/* TODO: brk fatahou why custom tags for button?*/}
            <button
              type="button"
              className="certified small bg-success text-white d-inline px-0 px-1 rounded-3"
              merchantReview-bs-html="true"
              merchantReview-bs-trigger="focus"
              merchantReview-bs-toggle="popover"
              merchantReview-bs-placement="top"
              merchantReview-bs-custom-class="veritatrust-popover"
              merchantReview-bs-title="<i className='flaticon-cube-3d me-1'></i> Verified via Blockchain"
              merchantReview-bs-content="We use the blockchain to track and verify the transaction. <br><a href='https://goerli.etherscan.io/tx/' target='_blank'>View the onchain transaction</a> | <a href='#' target='_blank'>What is Blockchain?</a>"
            >
              <span className="text-white">
                <i className="flaticon-cube-3d me-1"></i> Verified via
                Blockchain
              </span>
            </button>
          </div>
          <div className="date text-primary ms-auto">
            {moment(merchantReview.experienceDate).format('MMM DD, YYYY')}
          </div>
        </div>
        <div className="content mb-2">
          <h3>{merchantReview.title} </h3>
          <p className="text-muted">{merchantReview.content}</p>
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

export default ServiceReview;
