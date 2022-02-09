import React from "react";
import Header from "./Header/Header";
import {
    BrowserRouter as Router,
    Outlet,
    useParams,
  } from "react-router-dom";
  
  const Layout = (props) => {
    const { blockNumber } = useParams();
    
    return (
      <>
        <Header />
        <Outlet/>
      </>
    );
  };
  
  export default Layout;