import React, {useEffect, useRef, useState} from 'react';

//[Step 1] Import Charts Embedding SDK
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({filter, chartId, baseUrl, height, width}) => {

	//[Step 2] Create ChartsEmbedSDK object with the base URL for the chart
  const sdk = new ChartsEmbedSDK({baseUrl: baseUrl});
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);

	//[Step 3] Create a chart. Make it part of the component state
  const [chart] = useState(sdk.createChart({chartId: chartId, height: height, width: width, theme: "dark"}));

	//[Step 4] Whenever the chart is updated (because the data in the Atlas MongoDB cluster changes), render the chart
  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
  }, [chart]);

	//Set the filter for the chart. This would be used in a more sophisticated UI where there is a component to change the chart filter.
	//When the filter is updated, the chart will update.
  useEffect(() => {
    if (rendered) {
      chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
    }
  }, [chart, filter, rendered]);

  return <div className="chart" ref={chartDiv}/>;
};

export default Chart;
