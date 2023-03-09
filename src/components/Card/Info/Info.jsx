import React from "react";

import "./Info.css";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function Info({ title, subTitle, invoice, text, subText }) {
  return (
    <div className="info_card_container">
      <div className="header_info_card">
        <h2 className="title_info_card">{title}</h2>
        <div className="vector_header_info_card">
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="main_content">
          <h4 className="sub_title_main_content">{subTitle}</h4>
          <div className="invoice_main_content">
            <p className="text_main bold" id="invoice">{invoice}</p>
          </div>
          <div className="text_main_content">
            <p className="text_main" id="invoice_credit">{text}</p>
          </div>
          <div className="sub_text_main_content">
            <p className="text_main">{subText}</p>
          </div>
        </div>
    </div>
  );
}
