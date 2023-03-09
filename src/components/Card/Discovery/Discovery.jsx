import './Discovery.css'

import celular from '../../../assets/celular.webp'
import React from 'react'

export default function Discovery() {
  return (
    <div className='discovery_container'>
      <div className="img_card_discovery">
        <img src={celular} alt="Familia Feliz" className='img_discovery' />
      </div>
      <div className="text_discovery_container">
        <p className="title_discovery">
          Nubank Celular Seguro
        </p>
        <p className="text_discovery">
          100% cobertura, 0% estresse. Simule agora mesmo.
        </p>
      </div>
      <div className="button_discovery_container">
        <button className='button_discovery'>
          Conhecer
        </button>
      </div>
    </div>
  )
}
