import React from "react";
import { Table, Row, Col } from "react-bootstrap";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <Row>
        <p>
          <b>Block number: </b>
        </p>
      </Row>
      <Row>
        <p>
          <b>Block hash: </b>
        </p>
      </Row>
      <Row>
        <Col>
          <Row>
            <p>
              <b>Table of transactions</b>
            </p>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Txn Hash</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
