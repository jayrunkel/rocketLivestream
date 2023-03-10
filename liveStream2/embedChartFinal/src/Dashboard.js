import './Dashboard.css';
import Chart from "./Chart";

var BASE_URL = 'https://charts.mongodb.com/charts-runkeltest-ppdvu';
var CHART_ID = '640b85dc-a859-470f-8aed-0f684146aeca';

const Dashboard = () => {

  return <div className="App">
    <h1 className="title">Embedded MongoDB Chart</h1>
    <div className="charts">
    <Chart height={'600px'} width={'800px'} filter={null} baseUrl={BASE_URL} chartId={CHART_ID}/>
    </div>
  </div>
};

export default Dashboard;
