import './Dashboard.css';
import Chart from "./Chart";

var BASE_URL = 'https://charts.mongodb.com/charts-runkel-bbjup';
var CHART_ID = '63c1a932-6f2c-4252-8bf3-7eed9eeb2322';

const Dashboard = () => {

  return <div className="App">
    <h1 className="title">Embedded MongoDB Chart</h1>
    <div className="charts">
    <Chart height={'600px'} width={'800px'} filter={null} baseUrl={BASE_URL} chartId={CHART_ID}/>
    </div>
  </div>
};

export default Dashboard;
