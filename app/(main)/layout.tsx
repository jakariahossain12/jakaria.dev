import Footer from '@/components/Footer';
import Nevbar from '@/components/Nevbar';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
        <Nevbar/>
        {children}
        <Footer/>
    </section>
  )
}

