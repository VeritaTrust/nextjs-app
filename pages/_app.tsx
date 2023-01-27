import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type {AppProps} from 'next/app'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import {appWithTranslation} from "next-i18next";

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

export default appWithTranslation(App)
