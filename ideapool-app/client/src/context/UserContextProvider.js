import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import MyContext from "./MyContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [sortedCategoryType, setSortedCategoryType] = useState('content')

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

  return (
    <MyContext.Provider
      value={contextData}
    >
      {children}
    </MyContext.Provider>
  );
}

export default UserContextProvider;
