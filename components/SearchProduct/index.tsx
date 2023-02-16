import Link from 'next/link';

interface SearchResult {
  product_name: string;
  type: string;
  reviewNb: string;
}

function SearchProduct({ product_name, type, reviewNb }: SearchResult) {
  let productRoute = '/review-product/' + product_name;
  let merchantRoute = '/review-merchant/' + product_name;

  return (
    <>
      <div
        className="result star-5 d-md-flex mb-4 aos animated aos-init aos-animate"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="item">
          <Link href={type == 'product' ? productRoute : merchantRoute}>
            <h3 className="product__name h6 mb-1">{product_name}</h3>
            <span className="lien_global"></span>
          </Link>
          <div className="notation d-md-flex align-items-center">
            <div className="d-flex">
              <img
                className="mb-2 mb-md-0"
                src={'/img/star-5.jpg'}
                alt="notation"
                width="100"
                height="40"
              />
              <p className="mb-2 mb-md-0 mx-3">{reviewNb} reviews</p>
            </div>
          </div>
        </div>
        <div className="ms-auto">
          <a
            className="add_review mb-2 mb-md-0 border rounded-3 d-block"
            href="/listings/write-review/dell-universal-dock-d6000s"
          >
            Add review
          </a>
        </div>
      </div>
    </>
  );
}

export default SearchProduct;
