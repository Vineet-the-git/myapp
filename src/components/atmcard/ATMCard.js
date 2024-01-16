import React from "react";
import "./ATMCard.css";
import contactless from "../../resources/contactless.png";
import mastercard from "../../resources/mastercard.png";
import visa from "../../resources/visa.png";

const ATMCard = ({
    number,
    expiry,
    system = 'mastercard', // Optional, defaults to Mastercard
    hideDigits = false,
  }) => {
    return (
      <div className="atm-card">
        <div className="atm-card-top">
            <h1 id="bankname" className="white-text">CB</h1>
            <div id="vertical-line"></div>
            <h3 id="univbank" className="white-text">Universal Bank</h3>
        </div>

        <div className="atm-card-middle1">
            <div id="chip"></div>
            <div id="contactless">
                <img id="contactless-sign" src={contactless} alt="contactless"/>
            </div>
        </div>

        <div className="atm-card-middle2">
            <h2 id="cardnumber" className="white-text">{hideDigits ? '**** **** **** ' : ''}{number}</h2>
        </div>

        <div className="atm-card-bottom">
            <h3 id="expiry" className="white-text">{expiry}</h3>

            <div id="logo-container">
                <img className={system=='mastercard' ? 'mastercard-logo' : 'visa-logo'} src={system === 'mastercard' ? mastercard : visa} alt="logo"/>
                <p id="system-name" className="white-text">{system == 'mastercard' ? 'mastercard' : ''}</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default ATMCard;