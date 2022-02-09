import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Row, Col, Spinner } from "react-bootstrap";
import styles from "./Info.module.css";
import ErrorScreen from "../ErrorScreen/ErrorScreen";

const validation = (string) => {
  return /^([0-9]*)$/i.test(string);
};

const Info = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { blockNumber } = useParams();
  let hexString = "";

  if (!blockNumber || blockNumber === "latest") {
    hexString = "latest";
  } else if (!validation(blockNumber)) {
    hexString = "-1"
  } else {
    hexString = "0x" + parseInt(blockNumber).toString(16);
  }

  useEffect(() => {
    setLoading(true);
    fetch(
      new Request("https://cloudflare-eth.com", {
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBlockByNumber",
          params: [hexString, true],
          id: 64,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        setData(res.result);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [hexString]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Spinner animation="border" role="status" />
        <p>Please, wait. Information is loading</p>
      </div>
    );
  } else if (!data || error) {
    return <ErrorScreen />;
  } else {
    return (
      <div className={styles.wrapper}>
        <Row>
          <p>
            <b>Block number: </b> {`${parseInt(data.number,16)} (hex: ${data.number})` }
          </p>
        </Row>
        <Row>
          <p>
            <b>Block hash: </b> {data.hash}
          </p>
        </Row>

        <Row>
          {data.transactions.length == 0 ? (
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
                    {data.transactions.map((row) => {
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
