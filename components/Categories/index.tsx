const categorylist = [
  ['Feed', 'flaticon flaticon-healthy-food me-3'],
  ['Alimals', 'flaticon flaticon-beauty-saloon me-3'],
  ['Electronic devices', 'flaticon flaticon-responsive me-3'],
  ['Arts & Hobbies', 'flaticon flaticon-creativity me-3'],
  ['Luggage and Leather Goods', 'flaticon flaticon-suitcase me-3'],
  ['babies and toddlers', 'flaticon flaticon-baby-products me-3'],
  ['Companies & Industries', 'flaticon flaticon-prototype me-3'],
  ['office supply', 'flaticon flaticon-office-supplies me-3'],
  ['Games and toys', 'flaticon flaticon-toys me-3'],
  ['Furniture', 'flaticon flaticon-furnitures me-3'],
  ['Health & beauty', 'flaticon flaticon-cosmetics me-3'],
  ['Clothes and accessories', 'flaticon flaticon-hood me-3'],
];

function Categories() {
  return (
    <>
      <section className="bg-success home__categorie">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-8">
              <h4 className="display-6 text-white">
                Discover the different categories
              </h4>
            </div>
            <div className="col-lg-4 text-end">
              <a href="/categories" className="btn btn-primary mt-3">
                All categories
              </a>
            </div>
          </div>
          <ul className="row text-white category">
            {categorylist.map((categoryname, index) => (
              <li key={index} className="col-md-6 col-lg-3 mb-4 ">
                <a className="p-3 bg-white text-primary rounded-5" href="#">
                  <i className={categoryname[1]}></i> {categoryname[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Categories;
