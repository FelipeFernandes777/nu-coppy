import React from "react";

import logo from "../assets/react.svg";

import Balance from "../components/Balance/Balance";
import Card from "../components/Card/Card";
import Info from "../components/Card/Info/Info";
import Promotion from "../components/Card/Promotion/Promotion";
import Header from "../components/Header/Header";
import SliderIcons from "../components/SliderIcons/SliderIcons";

export default function Index() {
  return (
    <div>
      <Header user={"Felipe"} src={logo} alt="Foto da Pessoa" />
      <Balance />
      <SliderIcons />
      <Card />
      <Promotion />
      <Info
        title="Cartão de Credito"
        subTitle="Fatura Atual"
        invoice="R$ 451,58"
        text="Limite disponível de R$542,27"
      />
      <Info
        title="Emprestimo"
        text="Valor disponivel de até"
        subText="R$25.000,00"
      />
    </div>
  );
}
