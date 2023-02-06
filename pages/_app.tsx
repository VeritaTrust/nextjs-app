import '../public/styles/globals.css'
import '../public/styles/bootstrap.css'
import '../public/styles/style.css'
import '../public/styles/flaticon_veritatrust.css'
import '../public/styles/index.css'
//import 'bootstrap/dist/styles/bootstrap.styles' //TODO: brk check? above enough?
import type {AppProps} from 'next/app'
import Navbar from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import {appWithTranslation} from "next-i18next";
import {GetServerSideProps} from "next";
import axios from "axios";

function App({Component, pageProps}: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Navbar/>
      <Component {...pageProps} />
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
