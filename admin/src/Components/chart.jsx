import React,{useState} from 'react'
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

function Chart() {
    const data = [
      { name: "Jan", "Pending Requset": 2 },
      { name: "Feb", "Pending Requset": 3 },
      { name: "Mar", "Pending Requset": 4 },
      { name: "Apr", "Pending Requset": 1 },
      { name: "June", "Pending Requset": 3 },
      { name: "July", "Pending Requset": 15 },
      { name: "Aug", "Pending Requset": 4 },
      { name: "Sep", "Pending Requset": 5 },
      { name: "Oct", "Pending Requset": 3 },
      { name: "Sep", "Pending Requset": 3 },
      { name: "Nov", "Pending Requset": 2 },
      { name: "Dec", "Pending Requset": 3 },
    ];
  return (
    <div>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
}

export default Chart