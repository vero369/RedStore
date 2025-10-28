import React from 'react';
import { image } from '../sets';
import { AppContext } from './AppContext';

 const AppContextProvider = (props) => {

  const value = {
    image
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;