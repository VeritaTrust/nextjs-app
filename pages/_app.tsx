import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type {AppProps} from 'next/app'
import Navbar from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import {appWithTranslation} from "next-i18next";
import {GetServerSideProps} from "next";
import UserRepository from "@server/database/repository/UserRepository";
import axios from "axios";

function App({Component, pageProps}: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Navbar/>
      <div className={"vh-100 burak"}>
        <style jsx>{
          ` .burak {
            height: 110rem !important;
          }
          `}</style>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log('2121 !!!! AHASHDHSA')

    const {data} = await axios.get(
      `http://localhost:3000/api`,
    );
    console.log('!!!!!!NAME', data);

    //const a = await UserRepository.findAllRaw();
    //console.log('!!A', a)
    return {props: {name: "BURAK"}};
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      },
      props: {},
    };
  }
}

export default appWithTranslation(App)
