import React from "react";
import "./Header.css";
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Battery3BarOutlinedIcon from '@mui/icons-material/Battery3BarOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

const Header = () => {
    return (
        <div className='top-bar'>
        <h3 className='time white-text'>9:41</h3>
        <div className='icon-container-top'>
          <SignalCellularAltOutlinedIcon className='icon icon-top' />
          <WifiOutlinedIcon className='icon icon-top' />
          <Battery3BarOutlinedIcon className='icon icon-top battery' />
        </div>
      </div>
    );
};

export default Header;