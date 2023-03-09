import './SeeMore.css'

import React from 'react'

import { AiOutlineReload } from "react-icons/ai"

export default function SeeMore() {
  return (
    <div className='see_more_container'>
      <h2 className='title_see_more_main'>
        Acompanhe também
      </h2>
      <div className="container_main_see_more">
        <div className="icon">
          <AiOutlineReload />
          <p>Assitente de pagamentos</p>
        </div>
        <div className="button_see_more">
          <button className='see_more'>
            Novo
          </button>
        </div>
      </div>
    </div>
  )
}
