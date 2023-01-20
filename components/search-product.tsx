interface Review {
  reviewNb: string;
  productName: string,
}

function SearchProduct({productName, reviewNb}: Review) {

  return (<>

    <div className="result star-5 d-md-flex mb-4 aos animated aos-init aos-animate" data-aos="fade-up"
         data-aos-anchor-placement="center-bottom">
      <div className="item">
        <a href="/review-product/dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise">
          <h3 className="product__name h6 mb-1">
            {productName}
          </h3>
          <span className="lien_global"></span>
        </a>
        <div className="notation d-md-flex align-items-center">
          <div className="d-flex">
            <img className="mb-2 mb-md-0" src={'star-5.png'} alt="notation" width="100" height="40"/>
            <p className="mb-2 mb-md-0 mx-3">{reviewNb} reviews</p>
          </div>

        </div>
      </div>
      <div className="ms-auto">
        <a className="add_review mb-2 mb-md-0 border rounded-3 d-block"
           href="/listings/write-review/dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise">Add review</a>
      </div>
    </div>

  </>)
}

export default SearchProduct;
