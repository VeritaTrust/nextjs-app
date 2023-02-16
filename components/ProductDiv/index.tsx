import Link from 'next/link';

interface Props {
  productName: string;
}

function ProductDiv({ productName }: Props) {
  return (
    <>
      <section className="profil-header">
        <div className="container">
          <div className="row mt-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 mb-md-3">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <i className="flaticon-home"></i> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/Categories">Category 1</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Current page
                </li>
              </ol>
            </nav>
          </div>
          <div
            className="row d-flex align-items-center mb-3 aos animated aos-init aos-animate"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="col-lg-8 pt-2 pb-5 d-grid info-mark">
              <div className="logo my-1">
                <img
                  src="https://images2.productserve.com/?w=200&amp;h=200&amp;bg=white&amp;trim=5&amp;t=letterbox&amp;url=ssl%3Acommswarehouse.co.uk%2Fwp-content%2Fuploads%2F2022%2F09%2F1066802419.jpg&amp;feedId=72815&amp;k=2d65d3de3f20aeda39d436a4c4a7a52c5130b8fc"
                  alt="dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise"
                  width="200"
                  height="200"
                />
              </div>
              <div className="brand">
                <h1>{productName}</h1>
                <small className="text-muted">
                  <strong>6</strong> reviews • Good
                </small>
                <div className="form__header__note">
                  <div className="form__star mb-3 d-flex justify-content-start mx-auto mx-md-0">
                    <div className="star star__1 active"></div>
                    <div className="star star__2 active"></div>
                    <div className="star star__3 active"></div>
                    <div className="star star__4 active"></div>
                    <div className="star star__5"></div>
                    <p className="note lead my-auto ms-3 text-success">4.0</p>
                  </div>
                  <Link
                    href="/listings/write-review/dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise"
                    className="bg-success text-white d-inline py-2 px-3 rounded-3 shadow"
                  >
                    Write a review
                  </Link>
                  <Link
                    href="/ask_question"
                    className="bg-primary text-white d-inline py-2 px-3 rounded-3 shadow"
                  >
                    Ask a question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDiv;
