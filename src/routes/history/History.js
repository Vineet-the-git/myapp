import React, { useState, useEffect } from "react";
import "./History.css";
import profile from '../../resources/profile.jpg';
import HistoryOption from "../../components/historyoption/HistoryOption";

import ReplyIcon from '@mui/icons-material/Reply';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { motion } from "framer-motion";

const variants1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 1 },
}
const History = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [transitionDurations, setTransitionDurations] = useState([0.4, 0.8, 0.8, 0.7, 0.8]); // Adjust durations here

    useEffect(() => {
        setTimeout(() => setIsAnimated(true), 100); // Trigger main animation after rendering
    }, []);

    const options = [
        { icon: <ReplyIcon />, title: "Card to Card", notification: "Marie", amount: "+$143.00", category: "card-to-card", transitionDuration: transitionDurations[0] },
        { icon: <MusicNoteIcon />, title: "Apple Music", notification: "Online", amount: "-$467.00", category: "apple-music", transitionDuration: transitionDurations[1] },
        { icon: <LocalTaxiIcon />, title: "Uber", notification: "Service", amount: "-$143.00", category: "uber", transitionDuration: transitionDurations[2] },
        { icon: <LocalTaxiIcon />, title: "Uber", notification: "Service", amount: "-$43.00", category: "uber", transitionDuration: transitionDurations[3] },
        { icon: <ReplyIcon />, title: "Card to Card", notification: "Service", amount: "+$143.00", category: "card-to-card", transitionDuration: transitionDurations[4] },
    ];

    return (
        <div>
            <div className='card-top-container'>
                <motion.div className='text-container'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='white-text card-text'>History</h1>
                </motion.div>

                <div className='profile-container'>
                    <img src={profile} alt="profile" height={"40px"} />
                </div>
            </div>


            <motion.div className="histories-container">
                <div className="history-option-per-date">
                    <motion.p className="history-date-text white-text-new"
                        variants={variants1}
                        initial="hidden"
                        whileInView="visible"
                        transition="transition"
                    >20 April</motion.p>

                    <div className="history-options-container">
                        {options.map((option, index) => {
                            const { transitionDuration, ...rest } = option;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: index === 2 || index === 4 ? -180 : 0, opacity: 0 }}
                                    animate={isAnimated ? { y: 0, opacity: 1 } : { y: index === 2 || index === 4 ? -180 : 0, opacity: 0 }}
                                    transition={{ type: "spring", duration: transitionDuration }}
                                    className={`catalogue-option ${index === 2 || index === 4 ? 'sliding-option' : ''}`}
                                >
                                    {isAnimated && <HistoryOption {...rest} />}
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="history-option-per-date">
                    <motion.p className="history-date-text white-text-new"
                    variants={variants1}
                    initial="hidden"
                    whileInView="visible"
                    transition="transition"
                    >12 March</motion.p>
                    <HistoryOption {...{icon:<ReplyIcon/>, title:"Card to Card", notification:"Maria", amount:"+$1443.00", category:"card-to-card"}}/>
                    <HistoryOption {...{icon:<LocalTaxiIcon/>, title:"Uber", notification:"Service", amount:"-$14.00", category:"uber"}}/>
                    <HistoryOption {...{icon:<ReplyIcon/>, title:"Card to Card", notification:"Service", amount:"+$143.00", category:"card-to-card"}}/>
                </div>

                </div>
            </motion.div>
        </div>
    );
};

export default History;