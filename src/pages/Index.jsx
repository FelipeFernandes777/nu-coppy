import React from 'react'

import logo from "../assets/react.svg";

import Balance from "../components/Balance/Balance";
import Header from "../components/Header/Header";
import SliderIcons from '../components/SliderIcons/SliderIcons'

export default function Index() {
  return (
    <div>
      <Header user={"Felipe"} src={logo} alt="Foto da Pessoa" />
      <Balance />
      <SliderIcons />
    </div>
  )
}
