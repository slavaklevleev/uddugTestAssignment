import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [blockNumber, setBlockNumber] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  let navigate = useNavigate();

  const validation = (string) => {
    console.log("test: ", /^([0-9]*)$/i.test(string));
    return /^([0-9]*)$/i.test(string);
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
                    navigate(`/block/${blockNumber}`, { replace: false });
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
