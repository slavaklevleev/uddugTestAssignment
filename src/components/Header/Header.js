import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = (props) => {
  const [blockNumber, setBlockNumber] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const validation = (string) => {
    console.log("test: ", /^([1-9]*)$/i.test(string));
    return /^([1-9]*)$/i.test(string);
  };

  return (
    <div className={styles.header}>
      <Row className="align-items-center">
        <Col md={6}>
          <p>Uddug Test Assignment</p>
        </Col>
        <Col md={6}>
          <Row className="align-items-center">
            <Col xs={8} md={9}>
              <Form.Control
                isInvalid={isInvalid}
                type="text"
                placeholder="Search by number"
                size="sm"
                onChange={(event) => setBlockNumber(event.target.value)}
                value={blockNumber}
              />
            </Col>
            <Col xs={4} md={3}>
              <Button
                className={"w-100"}
                onClick={() => {
                  if (validation(blockNumber)) {
                    props.handleSearch(parseInt(blockNumber));
                    setIsInvalid(false);
                  } else {
                    setIsInvalid(true);
                  }
                }}
              >
                Search
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
