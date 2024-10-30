import Hero from '@/components/common/home/hero/hero'
import Nav from '@/components/common/home/navbar/nav'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='h-screen grid grid-rows-[auto_1fr] bg-secondary'>
        <Nav/>
        <Hero/>
      </div>
    </div>
  )
}
