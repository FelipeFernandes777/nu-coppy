import './Card.css'

import React from 'react'

import { CiCreditCard1 } from 'react-icons/ci'

export default function Card() {
  return (
    <div className='card_container'>
      <div className="icon_card">
        <CiCreditCard1 />
      </div>
      <div className="text_card_container">
        <p className='text_card'>
          Meus cartões
        </p>
      </div>
    </div>
  )
}
