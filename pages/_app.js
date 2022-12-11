import '../styles/globals.css'
import Layout from '../comps/Layout'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import nProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",
    color:"#FF9090"
  },
});


function MyApp({ Component, pageProps }) {
  nProgress.configure({showSpinner:false})

  Router.events.on('routeChangeStart',()=>{
    nProgress.start()
  })

  Router.events.on('routeChangeComplete',()=>{
    nProgress.done()
  })

  return (
    <>
    <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <ThemeProvider theme={theme}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default MyApp
