import {useState} from "react";

type Props = {
  rating: number;
  setRating: any;
}

const Stars = ({rating, setRating}: Props) => {
  const [hoverRating, setHoverRating] = useState(3)
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
    {[...Array(5).keys()].map(num =>
      <div key={num} className={`star-review star-default star-empty ${shouldShowFilled(num)}`}
           onMouseEnter={() => hoverEnterFn(num + 1)}
           onMouseLeave={() => hoverLeave(num + 1)}
           onClick={() => setRating(num + 1)}></div>
    )}
  </div>
}

export default Stars;
