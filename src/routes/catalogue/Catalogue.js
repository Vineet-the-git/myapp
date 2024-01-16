import React, { useState, useEffect } from "react";
import "./Catalogue.css";
import profile from '../../resources/profile.jpg';
import CatalogueOption from '../../components/catoption/CatalogueOption.js';
import CallIcon from '@mui/icons-material/Call';
import WifiIcon from '@mui/icons-material/Wifi';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { motion } from 'framer-motion';

const Catalogue = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [transitionDurations, setTransitionDurations] = useState([0.6, 0.5, 0.8, 0.7, 1.2]); // Adjust durations here

    useEffect(() => {
        setTimeout(() => setIsAnimated(true), 100); // Trigger main animation after rendering
    }, []);

    const options = [
        { icon: <CallIcon />, title: "Mobile", transitionDuration: transitionDurations[0] },
        { icon: <WifiIcon />, title: "Internet and TV", amount: "$21.00", transitionDuration: transitionDurations[1] },
        { icon: <DirectionsCarFilledOutlinedIcon />, title: "Traffic fines", amount: "$1,221.00", transitionDuration: transitionDurations[2] },
        { icon: <HomeIcon />, title: "Housing services", amount: "$0.00", transitionDuration: transitionDurations[3] },
        { icon: <FlashOnIcon />, title: "Utility payment", amount: "$442.00", transitionDuration: transitionDurations[4] },
    ];

    return (
        <div>
            <div className='card-top-container'>
                <motion.div className='text-container'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='white-text card-text'>Catalogue</h1>
                </motion.div>

                <div className='profile-container'>
                    <img src={profile} alt="profile" height={"40px"} />
                </div>
            </div>

            <div className="options-container">
                {options.map((option, index) => {
                    const { transitionDuration, ...rest } = option;

                    return (
                        <motion.div
                            key={index}
                            initial={{ y: index === 2 || index === 4 ? -100 : 0, opacity: 0 }}
                            animate={isAnimated ? { y: 0, opacity: 1 } : { y: index === 2 || index === 4 ? -100 : 0, opacity: 0 }}
                            transition={{ type: "spring", duration: transitionDuration }}
                            className={`catalogue-option ${index === 2 || index === 4 ? 'sliding-option' : ''}`}
                        >
                            {isAnimated && <CatalogueOption {...rest} />}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Catalogue;

