import React from "react";
import { Table, Row, Col, Spinner } from "react-bootstrap";
import styles from "./ErrorScreen.module.css";

const ErrorScreen = (props) => {
  return (
    <div className={styles.wrapper}>
      <p>Something went wrong. Please try again :(</p>
    </div>
  );
};

export default ErrorScreen;
