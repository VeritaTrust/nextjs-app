import { useState, useEffect } from 'react';

//function Filtering({ onFilterChange })
function Filtering() {
  const [selectedOption, setSelectedOption] = useState('1');

  // TODO: brk remove any
  const [checkboxes, setCheckboxes] = useState<any>({
    '5': false,
    '4': false,
    '3': false,
    '2': false,
    '1': false,
  });

  useEffect(() => {
    handleFilterChange();
  }, [checkboxes]);

  function handleCheckboxChange(e: any) {
    // TODO: brk
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  }

  function handleFilterChange() {
    const ratingFilters = Object.keys(checkboxes)
      .filter((key) => checkboxes[key])
      .join(',');
    const currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set('stars', ratingFilters);
    // const newUrl = `${window.location.pathname}?${currentUrlParams.toString()}`;
    const params = { stars: ratingFilters };
    const newUrl = `${window.location.pathname}?${Object.entries(params)
      .map((e) => e.join('='))
      .join('&')}`;
    window.history.pushState({}, '', newUrl);
    // TODO: brk ### onFilterChange(currentUrlParams);
  }

  return (
    <>
      <div
        className="bg-white p-3 mb-3 rounded-5 shadow reviews-filter aos animated aos-init aos-animate"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="d-lg-flex justify-content-between">
          <h2 className="d-flex">
            Reviews • <span className="ms-2">6</span>
          </h2>
          <select
            className="form-select d-flex"
            aria-label="Default select example"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">All langages</option>
            <option value="1">English</option>
            <option value="2">French</option>
            <option value="3">Deutsch</option>
          </select>
        </div>
        <hr />

        <div className="filters">
          <label htmlFor="excellent" className="lead d-grid">
            <input
              className="form-check-input"
              name="5"
              type="checkbox"
              id="excellent"
              checked={checkboxes['5']}
              onChange={handleCheckboxChange}
            />
            <small>Excellent</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Tres positif"
                style={{ width: '55%' }}
                aria-valuenow={55}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <small>55%</small>
          </label>
          <label htmlFor="good" className="lead d-grid">
            <input
              className="form-check-input"
              name="4"
              type="checkbox"
              id="good"
              checked={checkboxes['4']}
              onChange={handleCheckboxChange}
            />
            <small>Good</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Tres positif"
                style={{ width: '40%' }}
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <small>40%</small>
          </label>
          <label htmlFor="average" className="lead d-grid">
            <input
              className="form-check-input"
              name="3"
              type="checkbox"
              id="average"
              checked={checkboxes['3']}
              onChange={handleCheckboxChange}
            />
            <small>Average</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Tres positif"
                style={{ width: '33%' }}
                aria-valuenow={33}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <small>33%</small>
          </label>
          <label htmlFor="bad" className="lead d-grid">
            <input
              className="form-check-input"
              name="2"
              type="checkbox"
              id="bad"
              checked={checkboxes['2']}
              onChange={handleCheckboxChange}
            />
            <small>Bad</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Tres positif"
                style={{ width: '10%' }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <small>10%</small>
          </label>
          <label htmlFor="very_bad" className="lead d-grid">
            <input
              className="form-check-input"
              name="1"
              type="checkbox"
              id="very_bad"
              checked={checkboxes['1']}
              onChange={handleCheckboxChange}
            />
            <small>Very bad</small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Tres positif"
                style={{ width: '2%' }}
                aria-valuenow={2}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <small>2%</small>
          </label>
        </div>
      </div>
    </>
  );
}

export default Filtering;
