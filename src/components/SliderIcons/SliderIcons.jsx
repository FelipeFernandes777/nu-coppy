import Icons from "../Icons/Icons";
import "./SliderIcons.css";

// import { SiPix } from 'react-icons/si'
import { ImBarcode } from "react-icons/im";
import { BsPhoneFill } from "react-icons/bs"
import { BiTransfer } from "react-icons/bi"
import { RiPixelfedFill, RiLuggageDepositFill } from "react-icons/ri"

const SliderIcons = () => {
  return (
    <div className="slider_container">
      <ul className="slider_icons">
        <li>
          <Icons icon={<RiPixelfedFill />} text="Área Pix" />
        </li>
        <li>
          <Icons icon={<ImBarcode />} text="Pagar" />
        </li>
        <li>
          <Icons icon={<RiLuggageDepositFill />} text="Depositar" />
        </li>
        <li>
          <Icons icon={<BiTransfer />} text="Transferir" />
        </li>
        <li>
          <Icons icon={<BsPhoneFill />} text="Recarga de Celular" />
        </li>
      </ul>
    </div>
  );
};

export default SliderIcons;
