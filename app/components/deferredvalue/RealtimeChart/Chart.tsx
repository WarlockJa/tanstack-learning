import { useState, useEffect, useDeferredValue } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"; // Example charting library
import { Button } from "../../ui/button";
import { ChartData } from "./RealtimeChart";

interface ChartItem {
  time: string;
  value: number;
}

export default function Chart({
  liveData,
  reset,
}: {
  liveData: ChartData[];
  reset: () => void;
}) {
  const deferredLiveData = useDeferredValue(liveData);
  const [chartData, setChartData] = useState<ChartItem[]>([]);

  useEffect(() => {
    // Process and format data for the chart based on deferredLiveData
    const formattedData = deferredLiveData.map((item) => ({
      time: new Date(item.timestamp).toLocaleTimeString(),
      value: item.value,
    }));
    setChartData(formattedData);
  }, [deferredLiveData]);

  return (
    <div>
      {/* Other UI elements that can update immediately */}
      <Button onClick={reset}>reset</Button>
      <div>
        Current Value:{" "}
        {liveData.length > 0 ? liveData[liveData.length - 1].value : "N/A"}
      </div>
      <LineChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
