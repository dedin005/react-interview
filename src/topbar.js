import './Topbar.css'
import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

export default function TopBar() {
    return (
        <div className="header">
            <div className='row header-row'>
                <div className='col-4 site-name'>
                    <a href="0.0.0.0" className='img-logo'>
                        <div className='header-logo'>
                            <img className='img-src mr-1' alt="" style={{verticalAlign: "baseline"}} src="https://sikka.ai/Tickers/image/SikkaLogo29x29.png"></img>
                        </div>
                        <div className="header-name">
                            <h1 className="img-logo-header">Practice Optimizer</h1>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <div className='practices-parent'>
                        <div className='practices-elements'>
                            <h3 className='practices-header'>Practice(s)&nbsp;</h3>
                        </div>
                        <div className='practices-dropdown'>
                            <DropdownButton className="header-dropdown" title="1: Your Dental Practice" variant="outline-primary"/>
                        </div>
                    </div>
                </div>
                <div className='col-4 user-details'>
                    <div className='user-details-parent'>
                        <div className='d-inline mx-1 heart'>
                            <IconButton>
                                <FavoriteBorderOutlined />
                            </IconButton>
                        </div>
                        <div className='d-inline mx-1 bell'>
                            <IconButton>
                                <NotificationsOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className='d-inline mx-1 person'>
                            <IconButton>
                                <PersonOutlineOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className='d-inline mx-11 user-details-dropdown'>
                            <DropdownButton className="header-dropdown" title="Your Dental Practice" variant="outline-primary"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}