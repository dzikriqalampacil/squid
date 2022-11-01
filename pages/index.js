import React from 'react'
import CTA from '../ui/components/CTA'
import Features from '../ui/components/Features'
import Footer from '../ui/components/Footer'
import Hero from "../ui/components/Hero"
import LiveCrypto from '../ui/components/LiveCrypto'


export default function Home() {
  return (<>
    <Hero />
    <LiveCrypto />
    <Features />
    <CTA />
    <Footer />
  </>
  )
}
