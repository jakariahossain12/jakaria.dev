import DetailsNev from '@/components/DetaliesNev';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <DetailsNev/>
      
        {children}
      
      </section>
  )
}
