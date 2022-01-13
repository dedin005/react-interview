import "./Topbar.css"
import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function TopBar() {
    return (
        <div className="header">

            <Row className="header-row">

                <div id="container">
                    <Col className="col1">

                        <div className="site-name">
                            <a href="" className="img-logo">
                                <div className="header-logo">
                                    <img className="img-src" src="https://sikka.ai/Tickers/image/SikkaLogo29x29.png" />
                                </div>
                                <div className="header-name">
                                    <h1 className="">Practice Optimizer</h1>
                                </div>
                            </a>
                        </div>

                    </Col>

                    <Col className="col2">
                        
                        <div className="practices-parent">
                            <div className="practices-elements">
                                <h3 className="practices-header">Practice(s)&nbsp;</h3>
                            </div>
                            <div className="practices-dropdown">
                                <DropdownButton className="header-dropdown" title="1: Your Dental Practice"/>
                            </div>
                        </div>

                    </Col>

                    <Col className="col3">

                        <div className="user-details-parent">
                            <div className="heart">
                                <FavoriteBorderOutlined />
                            </div>
                            <div className="bell">
                                <NotificationsOutlinedIcon />
                            </div>
                            <div className="person">
                                <PersonOutlineOutlinedIcon />
                            </div>
                            <div className="user-details-dropdown">
                                <DropdownButton className="header-dropdown" title="1: Your Dental Practice"/>
                            </div>
                        </div>

                    </Col>
                </div>

            </Row>
        </div>
    )
}