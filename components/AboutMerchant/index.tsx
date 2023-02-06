type Props = {
  title: string;
  description: string;
  country: string;
  category: string;
}

function AboutMerchant({title, description, country, category}: Props) {
  return (
    <>
      <div className="bg-white p-3 mb-3 rounded-5 shadow widget about aos animated aos-init aos-animate"
           data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="header d-flex">
          <h4>{title}</h4>
        </div>
        <div className="content">

          <p>{description}</p>
          <div className="contact">
            <h4>Contact</h4>
            <ul className="ps-0">
              <li className="d-flex">
                <div className="icon"><i className="flaticon-location"></i></div>
                <div className="text">{country}</div>
              </li>
            </ul>
          </div>
          <div className="category">
            <h4>Category</h4>
            <ul className="ps-0">
              <li className="d-flex">
                <div className="text"><a href="#">{category}</a></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMerchant;
