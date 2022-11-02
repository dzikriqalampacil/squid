import React from 'react'
import CTA from '../ui/components/CTA'
import Features from '../ui/components/Features'
import Footer from '../ui/components/Footer'
import LiveCrypto from '../ui/components/LiveCrypto'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import("../ui/components/Hero"), {
  ssr: false,
});


export default function Home({ data }) {
  return (<>
    <Hero />
    <LiveCrypto cryptoData={data} />
    <Features />
    <CTA />
    <Footer />
  </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=5`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': 'adfb958b-fb38-4c65-9a5f-f67e7b36e3a5',
    },
  })
  const data = await res.json()

  return { props: { data } }
}
