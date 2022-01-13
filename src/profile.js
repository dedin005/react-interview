import "./Profile.css"
import React from "react";
import { Col, Row } from "react-bootstrap";
import ListIcon from '@mui/icons-material/List';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReplayIcon from '@mui/icons-material/Replay';
import Dropdown from "react-bootstrap/Dropdown";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Profile() {
    return (
        <div style={{ display: "flex" }} className="row profile">
            <div className="col-4 left-column">
                <div className="row">
                    <IconButton className="mx-3 my-3" fontSize="default">
                        <ListIcon fontSize="large" />
                    </IconButton>
                    <h1 className="profile-title">Practice Profile</h1>
                </div>
            </div>
            <div className="right-col">
                <div className="row updated">
                    <CheckCircleOutlineIcon className="offset" />
                    <h4 className="mx-1 offset">Last updated 1/12/22</h4>
                    <IconButton>
                        <ReplayIcon />
                    </IconButton>
                </div>
                <div className="row settings">
                    <text>Time Range in: </text>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
                            Months
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <text>Total Months</text>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true" variant="secondary">
                            24
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <text>Starting from: 01/01/2021</text>
                    <IconButton>
                        <CalendarTodayIcon />                        
                    </IconButton>
                </div>
            </div>
        </div>
    )
}