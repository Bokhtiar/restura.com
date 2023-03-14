import { Footer } from '@/layouts/footer'
import { Html, Head, Main, NextScript } from 'next/document'
import {Header} from '@/layouts/header'

export default function Document() {
  return (
    <Html lang="en">
      <Header></Header>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer></Footer>
    </Html>
  )
}
