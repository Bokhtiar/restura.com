import { Footer } from '@/layouts/footer'
import { Html, Head, Main, NextScript } from 'next/document'
import {Header} from '@/layouts/header'

export default function Document() {
  return (
    <Html lang="en">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer></Footer>
    </Html>
  )
}
