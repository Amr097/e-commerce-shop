import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          {" "}
          <a href="/" className="logo-small">
            N<p>O</p>
            STRA
          </a>
        </li>
        <li className="footer__item footer__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">shop</li>
        {["all collections", "winter edition", "discount"].map((item) => (
          <li key={uuidv4()} className="footer__item">
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="footer__list">
        <li className="footer__item">company</li>
        {["about us", "contact", "affiliates"].map((item) => (
          <li key={uuidv4()} className="footer__item">
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="footer__list">
        <li className="footer__item">support</li>
        {["FAQs", "cookie policy", "terms of use"].map((item) => (
          <li key={uuidv4()} className="footer__item">
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <ul className="footer__list">
        <li className="footer__item footer__item--payment">payment methods</li>
        <li className="footer__item">
          {[
            "/images/294654_visa_icon.svg",
            "/images/380809_card_master_mastercard_icon.svg",
            "/images/1156727_finance_payment_paypal_icon.svg",
          ].map((item) => (
            <img key={uuidv4()} src={item} alt="payment" loading="lazy" />
          ))}
        </li>
      </ul>

      <div className="footer__copyright">
        <p>Copyright&copy;{currentYear}. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
