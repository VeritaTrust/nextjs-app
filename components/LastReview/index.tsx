import moment from 'moment';
import Link from "next/link";
import {ReviewDto} from "@server/dto/ReviewDto";

type Props = {
  data: ReviewDto
}

function LastReview({data}: Props) {
  let srcvalue = "star" + data.rating.toString();
  let srcimg = '/img/star-1.jpg';
  let statusClass;
  let statusSymbolClass;

  switch (srcvalue) {
    case "star1":
      srcimg = '/img/star-1.jpg';
      break;
    case "star2":
      srcimg = '/img/star-2.jpg';
      break;
    case "star3":
      srcimg = '/img/star-3.jpg';
      break;
    case "star4":
      srcimg = '/img/star-4.jpg';
      break;
    case "star5":
      srcimg = '/img/star-5.jpg';
      break;
  }

  if (data.status === "pending") {
    statusClass = "pending";
    statusSymbolClass = "flaticon-time-left flaticon-pending"
  } else {
    statusClass = "complete";
    statusSymbolClass = "flaticon-cube-3d flaticon-complete";
  }

  let productRoute = "/review-product/" + data.product_name;
  let merchantRoute = "/review-merchant/" + data.product_name;

  return (<>
    <tbody>
    <tr className="aos animated aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <td data-label="Date" scope="row">{moment(data.experienceDate).format("MMM DD, YYYY")}</td>
      <td data-label="Details">
        <div className="d-flex flex-column">
          <span><strong>{data.product_name} [{data.review_type}]</strong></span>
          <span className="small">{data.orderId}</span>
          <div className="state_review"><img className="mb-2 mb-md-0" src={srcimg} alt="notation" width="100"
                                             height="40"/> - <span className="complete d-none"><i
            className="flaticon-cube-3d flaticon-complete"></i> Verified</span>
            <span className={statusClass}><i className={statusSymbolClass}></i> {data.status}</span>
          </div>
          <Link href={data.review_type == "product_review" ? productRoute : merchantRoute}><span>{data.content} </span></Link>
        </div>
      </td>
      <td data-label="Reward">{data.review_reward} VT
        <img className="" src={'/img/vt-coin.png'} alt="Veritatrust" height="30" width="30"/>
      </td>
    </tr>
    </tbody>
  </>)
}

export default LastReview;
