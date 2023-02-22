import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart() {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => { 
        const dict = {};
         for (let i = 0; i < data.length; i++) {
           if ( dict[data[i].category] === undefined ) {
             dict[data[i].category] = 1;
           } else {
             dict[data[i].category] += 1;
           }
         }
         console.log(dict);
         const objectKeys = Object.keys(dict);
         objectKeys.sort();
         const newArray = [];
          for (let i = 0; i < objectKeys.length; i++) {
            const newObj = {};
            newObj.name = objectKeys[i];
            newObj.amount = dict[objectKeys[i]];
            newArray.push(newObj);
          }
          setChartData(newArray);
      });
  }, []);


  return (
    <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}


export default Chart;