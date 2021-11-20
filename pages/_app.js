import 'tailwindcss/tailwind.css'
import '../styles/global.css';
import Router from "next/router";
import {Provider} from "next-auth/client"
import Head from 'next/head';

import ProgressBar from "@badrap/bar-of-progress";
const progress=new ProgressBar({
size:5,
color: "#f35955",
className:"z-50",
delay:100,
});
Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

function MyApp({ Component, pageProps }) {
  
   
  return (
    <>
    <Head>
    <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>
    </Head>
    <Provider session={pageProps.session}>
    <Component {...pageProps} />
    </Provider>
    
   </>
  );
}

export default MyApp