import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const HandleClose = () => {
    setIsOpen(!isOpen);
  }

  return <SidebarContext.Provider
    value={
      {isOpen, setIsOpen, HandleClose}
    }>
    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
