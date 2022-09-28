import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Chart() {
  const data = [
    { name: "Jan", Orders: 400 },
    { name: "Feb", Orders: 200 },
    { name: "Mar", Orders: 100 },
    { name: "Apr", Orders: 350 },
    { name: "May", Orders: 200 },
    { name: "Jun", Orders: 50 },
    { name: "Jul", Orders: 50 },
    { name: "Aug", Orders: 50 },
    { name: "Sep", Orders: 50 },
    { name: "Nov", Orders: 50 },
    { name: "Dec", Orders: 50 },
  ];
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <center>
        <h4>Annual Order Rate</h4>
      </center>
      <BarChart width={700} height={300} data={data}>
        <XAxis dataKey="name" stroke="#032A3E" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="Orders" fill="green" barSize={30} />
      </BarChart>
    </div>
  );
}

export default Chart;
