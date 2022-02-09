import React from "react";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/block" />} />
        <Route path="/block" element={<Layout />}>
          <Route path="/block/:blockNumber" element={<Info />} />
          <Route path="/block" element={<Info />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
