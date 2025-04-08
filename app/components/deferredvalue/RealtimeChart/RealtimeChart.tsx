import { useEffect, useState } from "react";
import Chart from "./Chart";

export interface ChartData {
  timestamp: number;
  value: number;
}

export default function RealtimeChart() {
  // realtime chart
  const [liveData, setLiveData] = useState<ChartData[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLiveData((prevData) => [
        ...prevData,
        { timestamp: Date.now(), value: Math.random() * 100 },
      ]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Chart liveData={liveData} reset={() => setLiveData([])} />;
}
