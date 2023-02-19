import {useState} from "react";

type Props = {
  name: string;
  rating: number;
  setRating: any;
  onChange: any;
}

const Stars = ({name, rating, setRating, onChange}: Props) => {
  const [hoverRating, setHoverRating] = useState(0)
  const [hoverEnter, setHoverEnter] = useState(false)

  function hoverEnterFn(index: number) {
    setHoverRating(index)
    setHoverEnter(true)
    shouldShowFilled(index)
  }

  function hoverLeave(index: number) {
    setHoverEnter(false)
    shouldShowFilled(index)
  }

  function shouldShowFilled(num: number) {
    if (hoverEnter) {
      return hoverRating > num ? "star-filled" : "";
    }
    return rating > num ? "star-filled" : "";
  }

  return <div className="form__star mb-3 d-flex justify-content-start">
    <input style={{maxHeight: '1px', maxWidth: '1px', background: 'transparent', border: 'none'}} min={1}
           onChange={onChange}
           name={name} required={!rating ? true : false}/>
    {[...Array(5).keys()].map(num =>
      <div key={num} className={`star-review star-default star-empty ${shouldShowFilled(num)}`}
           onMouseEnter={() => hoverEnterFn(num + 1)}
           onMouseLeave={() => hoverLeave(num + 1)}
           onClick={() => setRating(num + 1)}>
      </div>
    )}
  </div>
}

export default Stars;
