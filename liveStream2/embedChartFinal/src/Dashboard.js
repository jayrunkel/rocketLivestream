import './Dashboard.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Chart from "./Chart";

// BaseURL: https://charts.mongodb.com/charts-runkel-bbjup
// Chart ID: 63c1a932-6f2c-4252-8bf3-7eed9eeb2322

const Dashboard = () => {

  return <div className="App">
    <h1 className="title">Embedded MongoDB Chart</h1>
    <div className="charts">
    <Chart height={'600px'} width={'800px'} filter={null} chartId={'63c1a932-6f2c-4252-8bf3-7eed9eeb2322'}/>
    </div>
  </div>
};

export default Dashboard;
