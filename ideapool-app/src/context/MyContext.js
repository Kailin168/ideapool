import React from 'react';

const MyContext = React.createContext({
  setUser: () => {},
  user: {},
});

export default MyContext;