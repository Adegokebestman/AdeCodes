import React, { createContext, useContext, useState } from 'react';

const ActiveLinkContext = createContext();

export const ActiveLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLinkContext = () => useContext(ActiveLinkContext);
