import React from 'react';

const MyContext = React.createContext({
  setUser: () => {},
  user: {},
  setSortedCategoryType: () => {},
  sortedCategoryType: 'content',
});

export default MyContext;