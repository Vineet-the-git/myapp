import React from "react";
import "./HistoryOption.css";
import CallIcon from '@mui/icons-material/Call';
import {motion} from "framer-motion";

const variants2 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 1 },
}

const HistoryOption = ({
    icon = <CallIcon />,
    title = "Mobile",
    notification = "The debt is ",
    amount = "$34.00",
    category = "call"
}) => {
    return (
        <motion.div className="history-option"
        variants={variants2}
        initial="hidden"
        whileInView="visible"
        transition="transition"
        >
            <div className="history-noti-box">
                <div className={`history-noti-icon white-text ${category}`}>
                    {icon}
                </div>
                <div className="history-noti-text">
                    <h3 className="history-noti-title white-text-new">{title}</h3>
                    <p className="history-noti-notification">{notification}</p>
                </div>
                <div className="history-amount">
                    <p className="history-noti-amount white-text-new">{amount}</p>
                </div>
            </div>
            <div className="history-option-border-bottom"></div>
        </motion.div>
    );
};

export default HistoryOption;