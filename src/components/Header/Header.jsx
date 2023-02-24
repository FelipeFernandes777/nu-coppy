import "./Header.css";

import { useState } from "react";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Header = ({ user, alt, src }) => {
  const [enable, setEnable] = useState(true);
  const [saldo, setSaldo] = useState("1.324,98");

  const changeIcon = () => {
    enable === true ? setEnable(false) : setEnable(true);

    if (enable) {
      document.getElementById("saldo").innerText = "R$ *******";
    } else {
      document.getElementById("saldo").innerText = `R$ ${saldo}`;
    }
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
