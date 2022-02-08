import React from "react";
import { Table, Row, Col, Spinner } from "react-bootstrap";
import styles from "./Info.module.css";

const Info = (props) => {
  if (props.loading) {
    return (
      <div className={styles.loading}>
        <Spinner animation="border" role="status" />
        <p>Please, wait. Info is loading</p>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <Row>
          <p>
            <b>Block number: </b> {props.number}
          </p>
        </Row>
        <Row>
          <p>
            <b>Block hash: </b> {props.hash}
          </p>
        </Row>

        <Row>
          {props.transactions.length == 0 ? (
            <p>
              <b>There is no transactions or this block</b>
            </p>
          ) : (
            <Col>
              <Row>
                <p>
                  <b>Table of transactions</b>
                </p>
              </Row>
              <Row>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Txn Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.transactions.map((row) => {
                      return (
                        <tr className={styles.row}>
                          <td>{row.from}</td>
                          <td>{row.to}</td>
                          <td>{row.blockHash}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
            </Col>
          )}
        </Row>
      </div>
    );
  }
};

export default Info;
