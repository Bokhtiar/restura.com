import { Footer } from '@/layouts/footer'
import { Header } from '@/layouts/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
  <Header></Header>
  <Component {...pageProps} />
  <ToastContainer />
  <Footer></Footer>
  </> 
}
