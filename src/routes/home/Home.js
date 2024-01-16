import React from "react";
import "./Home.css";
import ATMCard from '../../components/atmcard/ATMCard.js';
import profile from '../../resources/profile.jpg';
import AnimatedSlider from '../../components/animatedslider/AnimatedSlider.js';
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <div>
            <div className='card-top-container'>
                <motion.div className='text-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}
                >
                    <h1 className='white-text card-text'>Bank</h1>
                    <h1 className='white-text card-text'>Cards</h1>
                    <h3 className='gray-text balance-text'>Balance</h3>
                    <h1 className='white-text money-text'>$2,748.00</h1>
                </motion.div>

                <div className='profile-container'>
                    <img src={profile} alt="profile" height={"40px"} />
                </div>
            </div>

            <div className='card-container'>
                <ATMCard
                    number="5489 7452 5726 9827"
                    expiry="04/24"
                    system="mastercard"
                />
            </div>

            <AnimatedSlider />
        </div>
    );
};

export default Home;