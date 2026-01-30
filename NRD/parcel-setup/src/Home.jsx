import React from 'react'
import Card, { PromotedCard } from './Card'

export default function Home() {

    const BeautyCards = PromotedCard(Card)
  return (
    <div className='flex  gap-2'>Home
        <br />
        <BeautyCards/>
        <Card/>
        <Card/>

    </div>
  )
}
