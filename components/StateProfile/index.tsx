import { ProfileStateDto } from '@server/dto/ProfileStateDto';

type Props = {
  data: ProfileStateDto;
};

function StateProfile({ data }: Props) {
  // Account verifications  return Class name
  const isBasicInfo = () => {
    return data.isBasicInfo
      ? ['complete', 'pending d-none']
      : ['complete d-none', 'pending'];
  };

  const isKYC = () => {
    return data.isKyc
      ? ['complete', 'pending d-none']
      : ['complete d-none', 'pending'];
  };

  const isMetamask = () => {
    return data.isMetamask
      ? ['complete', 'pending d-none']
      : ['complete d-none', 'pending'];
  };

  return (
    <>
      <div
        className="mb-4 bg-white shadow rounded-5 p-4 aos animated aos-init aos-animate"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="lead">Your profile</p>
        <div className="row border border-bottom-0 border-end-0 profil_state mb-3">
          <div className="col-lg-4 border-end border-bottom p-2">
            Basic info:{' '}
            <span className={isBasicInfo()[0]}>
              <i className="flaticon-check flaticon-complete"></i> complete
            </span>
            <span className={isBasicInfo()[1]}>
              <i className="flaticon-time-left  flaticon-pending"></i> pending
            </span>
          </div>
          <div className="col-lg-4 border-end border-bottom p-2">
            KYC:{' '}
            <span className={isKYC()[0]}>
              <i className="flaticon-check flaticon-complete"></i> complete
            </span>
            <span className={isKYC()[1]}>
              <i className="flaticon-time-left  flaticon-pending"></i> pending
            </span>
          </div>
          <div className="col-lg-4 border-end border-bottom p-2">
            Metamask:{' '}
            <span className={isMetamask()[0]}>
              <i className="flaticon-check flaticon-complete"></i> complete
            </span>
            <span className={isMetamask()[1]}>
              <i className="flaticon-time-left  flaticon-pending"></i> pending
            </span>
          </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <a
            className="btn btn-success d-block mt-2 text-white"
            href="/update_account"
          >
            Complete your profile
          </a>
        </div>
      </div>
    </>
  );
}

export default StateProfile;
