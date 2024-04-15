"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

export default function TimeGraph() {
  const [readData, setReadData] = useState<{ hour: number; value: number }[]>(
    []
  );

  useEffect(() => {
    axios
      .get("http://localhost:3333/clusters/1/iops/read")
      .then((response) => {
        const iopsData = response.data.data as Array<{
          hour: number;
          value: number;
        }>;

        // console.log(iopsData);

        const transformedData = iopsData.map(
          (data: { hour: number; value: number }) => ({
            hour: data.hour,
            value: data.value,
          })
        );

        setReadData(transformedData);
      })
      .catch((error) => {
        console.error("Error: fetching data:", error);
      });
  });

  return (
    <div className="p-2">
      <LineChart
        width={1000}
        height={250}
        data={readData}
        margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="hour"
          label={{ value: "Time", position: "insideBottomRight", offset: -10 }}
          tickFormatter={(tick) => {
            const date = new Date(tick * 1000);
            return date.toLocaleDateString();
          }}
        />
        <YAxis
          label={{ value: "Value", angle: -90, position: "insideLeft" }}
          tickFormatter={(tick) => {
            return `${tick / 1000}K`;
          }}
        />
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
      </LineChart>
    </div>
  );
}
