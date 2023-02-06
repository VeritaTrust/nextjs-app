import {ReviewDto} from "@server/dto/ReviewDto";

type Props = {
  review: ReviewDto
}

function ScrollReview({review}: Props) {
  let srcimg = '/img/star-1.jpg';
  let srcvalue = "star" + review.rating.toString();
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
    <div className="review border border-success rounded-3 p-3 mb-3">
      <div className="review__header d-flex align-items-center mb-3">
        <img className="rounded-circle me-2" src={'/img/lorem-portrait.jpg'} alt="" height="60" width="60"/>
        <div className="stars ms-auto align-middle w-100">
          <div className="form__star reviews d-flex justify-content-start">
            <img className="mb-2 mb-md-0" src={srcimg} alt="notation" width="100" height="40"/>
          </div>
        </div>
      </div>
      <div className="review__body">
        <p><span className="review__author">{review.fName} {review.lName}</span> à noté <br/><span
          className="review__societe">{review.entity}</span></p>
        <p><span className="lead text-success">“</span> {review.content} <span className="lead text-success">”</span>
        </p>
      </div>
    </div>
  )
}

export default ScrollReview;
