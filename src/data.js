import "./Data.css"
import React from "react";
import { ScatterChart, CartesianGrid, ZAxis, XAxis, YAxis, Scatter, Tooltip, Legend, ResponsiveContainer } from "recharts";
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Data() {
    const data = [
        {
            "x": 1.1,
            "y": 1100,
            "z": "Ferengi Teeth"
        },
        {
            "x": 1.37,
            "y": 2700,
            "z": "Affinity Dental"
        },
        {
            "x": 2.1,
            "y": 700,
            "z": "Klingon Smiles"
        },
        {
            "x": 1.9,
            "y": 2600,
            "z": "Bugs Bunny Dental"
        },
        {
            "x": 3.7,
            "y": 2650,
            "z": "Awesome Smiles"
        },
        {
            "x": 4.3,
            "y": 1400,
            "z": "Bluetooth Dental"
        }
    ];

    const yticks = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500];

    const xticks = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    const labelFormatter = (value) => {
        if (Number.isInteger(value))
            return value;
        if (typeof value === 'string')
            return value;
        return "$" + value;
    }
    const tickFormatter = (value) => {
        return "$" + value;
    }
    return (
        <div className="row">
            <div className="axis-label">
                <h4 className="label-name">Patients Seen</h4>
            </div>
            <div className="col-7 graph-ui">
                <div className="row">
                    <DropdownButton className="mx-3" title="Adjusted Production" variant="outline-secondary"/>
                    <h4 className="bold">vs.</h4>
                    <DropdownButton className="mx-3" title="Patients Seen" variant="outline-secondary"/>
                </div>
                <div className="row my-50 graph">
                    <ResponsiveContainer width="100%" aspect={1.5}>
                        <ScatterChart
                            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="x" name="Adjusted Production" unit="M" type="number" tickCount="10" ticks={xticks} range={[0, 6]} tickFormatter={(value) => tickFormatter(value)} />
                            <YAxis dataKey="y" name="Patients Seen" unit="" type="number" tickCount="8" ticks={yticks} range={[0, 3500]} />
                            <ZAxis dataKey="z" name="Office Name" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value) => labelFormatter(value)} />
                            <Legend />
                            <Scatter name="" data={data} fill="#3a6486" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
                <div className="row">
                    <h4 className="x-label">Adjusted Production</h4>
                </div>
            </div>
            <div className="col-4 info">
                <div id="black" className="row">
                    <span className="col-4 left">Affinity Dental</span>
                </div>
                <div id="gray" className="row">
                    <span id="nowrap" className="col-4 left">234, Steven Creek San Jose CA, 95182</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Speciality&nbsp;</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">Operatories</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">General Dentist</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">3</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Active Patients</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">New Patients Per Month</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">3289</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">50</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Recall Patients</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">Patients w/ Treatment Plans</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">200</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">3289</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Dentists</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}>Speciality</span>
                    <span className="col-4 right">NPI</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">Dr. Ryan Smith</span>
                    <span className="col-4 npi" style={{ textAlign: "left" }}>General Dentist</span>
                    <span className="col-4 npi">0123456789</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">Dr. Tim McCarthy</span>
                    <span className="col-4 npi" style={{ textAlign: "left" }}>Pedodontist</span>
                    <span className="col-4 npi">0123456789</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Hygienists</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">Sarah Downstorm</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 npi">0123456789</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">Ashley Brown</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 npi">0123456789</span>
                    <br />
                </div>
                <div id="gray" className="row">
                    <span id="nowrap" className="col-4 left">Practice Management Software</span>
                    <span className="col-4 middle"></span>
                    <span className="col-4 right">Finance Software</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">Open Dental v21</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">QuickBooks</span>
                    <br />
                    <br />
                </div>
                <div id="gray" className="row">
                    <span className="col-4 left">Sikka Master Customer ID</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">Sikka Practice ID</span>
                </div>
                <div id="black" className="row">
                    <span className="col-4 left">D62493</span>
                    <span className="col-4 middle" style={{ textAlign: "left" }}></span>
                    <span className="col-4 right">1-1</span>
                </div>
            </div>
        </div>
    )
}