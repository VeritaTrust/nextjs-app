import {GetServerSideProps, NextPage} from "next";
import {PrismaClient} from "@prisma/client";

type Props = {
  hash: string;
}

const TransactionPage: NextPage<Props> = () => {

  return (
    <main>
      <section className="py-5 form valid">

        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-11 col-lg-8 pt-3 mx-auto text-center">
              <p>Transaction have been already completed</p>
            </div>
            <div className="col-11 col-lg-8 py-4 px-lg-4 mx-auto result-ok">
              <div className="form__header">
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-12 col-md-8 col-xl-9 text-center">
                    <img className="align-self-center mb-4" src="http://dev.veritatrust.com/assets/img/coin.png"
                         alt="Product name"/>
                    <p className="lead text-green">Congratulations!<br/>Your review is validated</p>
                    <p className="">You just got rewarded with <strong>1 token 🤑</strong> for your review. Get more
                      reward and review more.</p>
                    <p className="lead text-green">Get more reward and review more.</p>
                    <a className="btn btn-primary" href="#">Review your Products recently buy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default TransactionPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  try {
    const transactionId = context.params?.transactionId as string;

    const res = await new PrismaClient().blockchainTransaction.findUnique({
      where: {
        id: Number(transactionId)
      }
    })

    if (!res) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        hash: res?.hash
      }
    }

  } catch (e) {
    console.error(e)
    return {
      notFound: true
    }
  }

}
