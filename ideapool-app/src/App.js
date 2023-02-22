import React from "react";
import IdeaContainer from "./components/IdeaContainer";
import Chart from "./components/Chart";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {

  // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  // const test = (
  //   <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //   </LineChart>
  // );

  // const Test2 = ({test}) => {
  //   return (
  //     <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  //       <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //       <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  //       <XAxis dataKey="name" />
  //       <YAxis />
  //     </LineChart>
  //   )
  // }

  return (
    <div className="App">
      Welcome to your idea board!
      <IdeaContainer />
      <Chart /> { /* this is the component, must have return and export default */ }
      {/* {test}  this is just a variable, and doesnt need a return, this is using the value directly */}
      {/* <Test2 test={"a"} />   this is the exact same thing as below, except this is written as HTML component*/}
      {/* {Test2({test: "a"})} This is written as a function, taking in test: a as a object prop */}
    </div>
  );
}

export default App;
