import React from "react";
import { Table, Row, Col, Spinner, Button } from "react-bootstrap";
import styles from "./ErrorScreen.module.css";
import { useNavigate } from "react-router-dom";

const ErrorScreen = (props) => {
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <p>Something went wrong. Please try again :(</p>
      <Button onClick={()=>{navigate(`/block/latest`, { replace: false });}}>Display latest block</Button>
    </div>
  );
};

export default ErrorScreen;
