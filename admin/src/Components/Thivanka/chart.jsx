import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
 

function Chart() {
    const data = [
      { name: "Jan", count: 400 },
      { name: "Feb", count: 200 },
      { name: "Mar", count: 100 },
      { name: "Apr", count: 350 },
      { name: "May", count: 200 },
      { name: "Jun", count: 50 },
      { name: "Jul", count: 50 },
      { name: "Aug", count: 50 },
      { name: "Sep", count: 50 },
      { name: "Nov", count: 50 },
      { name: "Dec", count: 50 }
    ];
  return (
    <div style={{width:"100%",overflow:"hidden"}}>
      <BarChart width={700} height={300} data={data}>
        <XAxis dataKey="name" stroke="#032A3E" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="count" fill="green" barSize={30} />
      </BarChart>
    </div>
  );
}

export default Chart