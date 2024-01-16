import React, { useState, useEffect } from 'react';
import './Navigationbar.css';
import FiberSmartRecordOutlinedIcon from '@mui/icons-material/FiberSmartRecordOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { motion } from 'framer-motion';

import { useNavigate, useLocation } from 'react-router-dom';

const Navigationbar = () => {
    const [selectedIcon, setSelectedIcon] = useState('home'); // Initial state
    const navigate = useNavigate();
    const location = useLocation(); // Access current URL

    useEffect(() => {
        // Determine selectedIcon from the current URL path
        const currentIcon = location.pathname.substring(1); // Extract path after "/"
        setSelectedIcon(currentIcon);
    }, [location]); // Re-run effect when location changes

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
        navigate(`/${icon}`);
    };

    return (
        <div className='card-bottom-container'>
            <div className='navigationbar'>
                <motion.div className={`icon-container ${selectedIcon === 'home' ? 'selected' : ''}`}
                    whileHover={{
                        scale: 1.3,
                        type: 'spring',
                        stiffness: 500
                    }}
                >
                    <HomeOutlinedIcon
                        className="icon home"
                        onClick={() => handleIconClick('home')}
                    />
                </motion.div>

                <motion.div className={`icon-container ${selectedIcon === 'catalogue' ? 'selected' : ''}`}
                    whileHover={{
                        scale: 1.3,
                        type: 'spring',
                        stiffness: 500
                    }}
                >
                    <FiberSmartRecordOutlinedIcon
                        className="icon catalogue"
                        onClick={() => handleIconClick('catalogue')}
                    />
                </motion.div>

                <motion.div className={`icon-container ${selectedIcon === 'history' ? 'selected' : ''}`}
                    whileHover={{
                        scale: 1.3,
                        type: 'spring',
                        stiffness: 500
                    }}
                >
                    <HistoryOutlinedIcon
                        className="icon history"
                        onClick={() => handleIconClick('history')}
                    />
                </motion.div>

                <motion.div className={`icon-container ${selectedIcon === 'salarycard' ? 'selected' : ''}`}
                    whileHover={{
                        scale: 1.3,
                        type: 'spring',
                        stiffness: 500
                    }}
                >
                    <MenuOutlinedIcon
                        className="icon menu"
                        onClick={() => handleIconClick('salarycard')}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Navigationbar;
