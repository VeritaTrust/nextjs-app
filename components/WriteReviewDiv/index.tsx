import Image from 'next/image';

function WriteReviewDiv() {
  return (
    <>
      <div
        className="bg-white p-3 mb-2 mb-md-5 rounded-5 shadow add-review-express d-flex justify-content-between aos animated aos-init aos-animate"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="profil d-flex">
          <Image
            alt={'star image'}
            className="me-3 d-none d-lg-block"
            src={'/img/star-1.png'}
            width="50"
            height="50"
          />
          <p>
            <a href="#">Write a review</a>
          </p>
        </div>
        <div className="form__star">
          <img src={'/img/star-3.svg'} alt="reviews" />
        </div>
      </div>
    </>
  );
}

export default WriteReviewDiv;
