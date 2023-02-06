import React, {useState, useEffect} from 'react';
import {ProductDto} from "@server/dto/ProductDto";
import SearchProduct from "../SearchProduct";

function SearchBar() {

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ProductDto[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event?.target as HTMLElement).closest('.search-bar')) {
      setSearchVisible(!searchVisible);
    }
  };

  useEffect(() => {
    // Send a request to the server to search for reviews matching the search term
    if (searchTerm) {
      /* TODO: brk FETCH SEARCH
      axios.get(`/search?q=${searchTerm}`)
        .then(response => {
          setSearchResults(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });*/
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div onClick={(e) => handleClick(e)}>
      <div className="search-bar">
        <form className="d-flex w-lg-50 search my-3 my-lg-0" role="search" action="/search"><input
          className="form-control" placeholder="search product or service" id="search-1" data-bs-toggle="modal"
          data-bs-target="#SearchModal" name="q" value={searchTerm} onChange={handleSearchChange}/></form>
      </div>

      <div className="search_listing_modal">
        <ul className="">
          {searchResults.map((product, index) => (
            <li key={index} className="search_item">
              <SearchProduct product_name={product.product_name} type={'TYPE?'} reviewNb="6"/>
            </li>
          ))}
        </ul>
        <p></p>
      </div>

      {searchVisible ?
        <div className="modal fade" id="SearchModal" tabIndex={-1} aria-labelledby="SearchModal" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-body">
                <form className="d-flex w-lg-50 search my-3 my-lg-0" role="search" action="/search">
                  <input className="form-control" placeholder="search product or service" id="search-2" name="q"
                         value={searchTerm} onChange={handleSearchChange}/>
                </form>
              </div>
              <div className="search_listing_modal">
                <p className="lead ps-3">Listing</p>
                <ul className="">
                  {searchResults.map((product, index) => (
                    <li key={index} className="search_item">
                      <SearchProduct product_name={product.product_name} type={'TYPE??'} reviewNb="6"/>
                    </li>
                  ))}
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div> : null}
    </div>
  );
}

export default SearchBar;
