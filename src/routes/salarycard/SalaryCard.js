import React from "react";
import "./SalaryCard.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ATMCard from "../../components/atmcard/ATMCard";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import {motion} from "framer-motion";

const SalaryCard = () => {
    return (
        <div className="salary-card">
            <ArrowBackIcon className="white-text back-icon" />
            <motion.div className="salary-card-text-container"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            >
                <h1 className='white-text card-text'>Salary</h1>
                <h1 className='white-text card-text'>card</h1>
            </motion.div>
            <div className="atm-card-container">
                <ATMCard
                    number="5489 7452 5726 9827"
                    expiry="04/24"
                />
            </div>
            <div className="icon-text-salary-card">
                <div className="salary-card-text-container">
                    <h1 className="gray-text balance-text">Balance</h1>
                    <h1 className='white-text money-text'>$2,748.00</h1>
                </div>
                <div className="salary-card-icon">
                    <div className="box-icon">
                        <HistoryOutlinedIcon className="white-text" />
                    </div>
                    <div className="box-icon">
                        <ReplyIcon className="white-text reply-salary-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalaryCard;