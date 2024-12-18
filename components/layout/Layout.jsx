import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Archivo_Black, Inter, Archivo, Sora } from 'next/font/google'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const archivo = Archivo({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const archivo_black = Archivo_Black({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo_black',
})
const sora = Sora({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const Layout = ({ metaTitle, canonicalUrl, metaDescription, metaImage, children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
        <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: metaTitle,
          type: 'website',
          description: metaDescription,
          images: [{ url: metaImage, width: 1200, height: 628, alt: 'meta-image' }],
          siteName: canonicalUrl,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <div className={`layout ${inter.variable} ${archivo_black.variable} ${archivo.variable} ${sora.variable}`}>
        <Navbar />
        <motion.main animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
