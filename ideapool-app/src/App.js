import React, { useEffect, useState } from "react";
import IdeaContainer from "./components/IdeaContainer";
import Chart from "./components/Chart";
import ContactPage from "./components/ContactPage";
import ProfileSetting from "./components/ProfileSetting";
import { Routes, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import MyContext from "./context/MyContext";
import PostsDetails from "./components/PostsDetails";
import NotFound from "./components/NotFound";
import Cookies from 'js-cookie';
import './darkMode.css';



// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {

  const [user, setUser] = useState({})
  const [theme, setTheme] = useState('light');
  const [sortedCategoryType, setSortedCategoryType] = useState('content')

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

    // Cookies.set('myCookie', 'cookieValue', { expires: 7 });
    // Retrieve the cookie value when the component mounts
    const myCookie = Cookies.get('sortedCategoryTypeInCookie');
    setSortedCategoryType(myCookie || 'content');
  }, []);


  useEffect(() => {
    Cookies.set('sortedCategoryTypeInCookie', sortedCategoryType, { expires: 7 });
  }, [sortedCategoryType]);




  const contextData = {
    setUser,
    user,
    // setSortedCategoryType: (newValue) => {
    //   setSortedCategoryType(newValue);
    //   Cookies.set('sortedCategoryTypeInCookie', newValue, { expires: 7 });
    // },
    setSortedCategoryType,
    sortedCategoryType
  };


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <MyContext.Provider value={contextData} className={`App ${theme}`} >
      {theme === 'light' ? <button onClick={toggleTheme}> Switch to Dark Mode </button> : <button onClick={toggleTheme}> Turn On Light Mode</button>}
      Welcome to your idea board!
      <TopNavBar />
      <Routes>
        <Route path="/" element={<IdeaContainer />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/profile" element={<ProfileSetting />} />
        <Route path="/posts/:postsId" element={<PostsDetails />} />
        {/* this is where the param is coming from postsId */}
        <Route path="/posts/*" element={<NotFound />} />
      </Routes>

      {/* <Chart /> { /* this is the component, must have return and export default */}
      {/* {test}  this is just a variable, and doesn't need a return, this is using the value directly */}
      {/* <Test2 test={"a"} />   this is the exact same thing as below, except this is written as HTML component*/}
      {/* {Test2({test: "a"})} This is written as a function, taking in test: a as a object prop */}
    </MyContext.Provider>
  );
}

export default App;
