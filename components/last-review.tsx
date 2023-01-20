import Image from "next/image";

interface Review {
  data: {
    prName: string;
    orderId: string;
    content: string;
    status: string;
    rating: number,
    reward: number,
    reviewType: string;
    experienceDate: string;
  }
}

function LastReview({data}: Review) {
  console.log('DASDA', data)
  let srcvalue = "star" + data.rating;
  let srcimg = 'star-1.png';
  let statusClass = "pending";
  let statusSymbolClass = "flaticon-time-left flaticon-pending";

  switch (srcvalue) {
    case "star1":
      srcimg = 'star-1.png';
      break;
    case "star2":
      srcimg = 'star-2.jpg';
      break;
    case "star3":
      srcimg = 'star-3.jpg';
      break;
    case "star4":
      srcimg = '/star-4.jpg';
      break;
    case "star5":
      srcimg = 'star-5.jpg';
      break;
  }

  if (data.status === "pending") {
    statusClass = "pending";
    statusSymbolClass = "flaticon-time-left flaticon-pending"
  } else {
    statusClass = "complete";
    statusSymbolClass = "flaticon-cube-3d flaticon-complete";
  }


  return (<>
    <tbody>
    <tr className="aos animated aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <td data-label="Date" scope="row">{data.experienceDate}</td>
      <td data-label="Details">
        <div className="d-flex flex-column">
          <span><strong>{data.prName} [{data.reviewType}]</strong></span>
          <span className="small">{data.orderId}</span>
          <div className="state_review">
            <Image className="mb-2 mb-md-0" src={srcimg} alt="notation" width="100"
                   height="40"/> - <span className="complete d-none"><i
            className="flaticon-cube-3d flaticon-complete"></i> Verified</span>
            <span className={statusClass}><i className={statusSymbolClass}></i> {data.status}</span>
          </div>
          <a
            href="/review-product/dell-npos-auto-sn-esg-5y-keep-your-hd-for-enterprise"><span>{data.content} </span></a>
        </div>
      </td>
      <td data-label="Reward">{data.reward} VT
        <Image className="" src={'/vt-coin.png'} alt="Veritatrust" height="30" width="30"/>
      </td>
    </tr>


    </tbody>
  </>)
}

export default LastReview;
