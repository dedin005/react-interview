import './Topbar.css'
import React from "react";
import Bootstrap from 'react-bootstrap'
import Container from "react-bootstrap/Container";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';

export default function TopBar() {
    return (
        <Container>
            <div className="header">
                <Row className='header-row'>
                    <Col className='site-name'>
                        <a href="" className='img-logo'>
                            <div className='header-logo'>
                                <img className='img-src' src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
                            </div>
                            <div className="header-name">
                                <h1 className="img-logo-header">Practice Optimizer</h1>
                            </div>
                        </a>
                    </Col>

                    <Col className='practices'>
                        <div className='practices-parent'>
                            <div className='practices-elements'>
                                <h3 className='practices-header'>Practice(s)&nbsp;</h3>
                            </div>
                            <div className='practices-dropdown'>
                                <DropdownButton className="header-dropdown" title="1: Your Dental Practice"/>
                            </div>
                        </div>
                    </Col>

                    <Col id='user-details'>
                        <div className='user-details-parent'>
                            <div className='icons'>
                                <FavoriteBorderOutlined />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
        </Container>
    )
}