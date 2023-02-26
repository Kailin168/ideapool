import React, { useEffect, useState } from "react";
import IdeaContainer from "./components/IdeaContainer";
import Chart from "./components/Chart";
import ContactPage from "./ContactPage";
import ProfileSetting from "./ProfileSetting";
import { Routes, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import MyContext from "./context/MyContext";

// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {

  const [user, setUser] = useState({})

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


  useEffect(() => {
    fetch('http://localhost:4000/users/1')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);



  const contextData = { setUser, user };


  return (
    <MyContext.Provider value={contextData}>
      Welcome to your idea board!
      <TopNavBar />
      <Routes>
        <Route path="/" element={<IdeaContainer />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
      </Routes>

      {/* <Chart /> { /* this is the component, must have return and export default */}
      {/* {test}  this is just a variable, and doesnt need a return, this is using the value directly */}
      {/* <Test2 test={"a"} />   this is the exact same thing as below, except this is written as HTML component*/}
      {/* {Test2({test: "a"})} This is written as a function, taking in test: a as a object prop */}
    </MyContext.Provider>
  );
}

export default App;
