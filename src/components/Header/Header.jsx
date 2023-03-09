import "./Header.css";

import { useState } from "react";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Header = ({ user, alt, src }) => {
  const [enable, setEnable] = useState(true);
  const [saldo, setSaldo] = useState("1.324,98");
  const [invoice, setInvoice] = useState("451,58")

  const changeIcon = () => {
    enable === true ? setEnable(false) : setEnable(true);

    let getSaldo = document.getElementById("saldo");
    let getInvoice = document.getElementById("invoice");
    let getCredite = document.getElementById("invoice_credit");

    if (enable) {
      getSaldo.textContent = "R$ *******";
      getInvoice.textContent = "R$ ******"
      getCredite.style = 'display: none'
    } else {
      getSaldo.textContent = `R$ ${saldo}`;
      getInvoice.textContent= `R$ ${invoice}`
      getCredite.style = 'display: block'
    }
    return getSaldo.setAttribute('class', 'title_main')
  };

  return (
    <header className="header_container">
      <nav className="navigate_container">
        <div className="img">
          <img src={src} alt={alt} />
        </div>
        <div className="icons_container">
          <div className="icons" onClick={changeIcon} id="icon">
            {enable === true ? <RxEyeOpen /> : <RxEyeClosed />}
          </div>
          <div className="icons">
            <AiOutlineQuestionCircle />
          </div>
          <div className="icons">
            <MdOutlineMail />
          </div>
        </div>
      </nav>
      <div className="text_container">
        <p className="text">Olá, {user}</p>
      </div>
    </header>
  );
};

export default Header;
