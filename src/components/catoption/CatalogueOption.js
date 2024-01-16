import React from "react";
import "./CatalogueOption.css";
import CallIcon from '@mui/icons-material/Call';

const CatalogueOption = ({
    icon = <CallIcon />,
    title = "Mobile",
    notification = "The debt is ",
    amount = "$34.00"
}) => {
    return (
        <div className="catalogue-option">
            <div className="catalogue-noti-box">
                <div className="catalogue-noti-icon white-text">
                    {icon}
                </div>
                <div className="catalogue-noti-text">
                    <h3 className="catalogue-noti-title white-text-new">{title}</h3>
                    <p className="catalogue-noti-notification">{notification}<span className="catalogue-noti-amount">{amount}</span></p>
                </div>
                <div className="catalogue-noti-button">
                    <button className="catalogue-noti-btn">Pay</button>
                </div>
            </div>
            <div className="cat-option-border-bottom"></div>
        </div>
    );
};

export default CatalogueOption;