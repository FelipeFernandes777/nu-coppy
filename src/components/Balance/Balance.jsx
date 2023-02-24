import "./Balance.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import Title from "../Title/Title";

const Balance = () => {
  return (
    <div className="balance_container">
      <div className="balance_text_container">
        <Title>Conta</Title>
        <div className="icon_balance">
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="balance" id="saldo">
        <Title>R$ 1.324,98 </Title>
      </div>
    </div>
  );
};

export default Balance;
