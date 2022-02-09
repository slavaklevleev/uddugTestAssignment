import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Header = (props) => {
  const [blockNum, setBlockNum] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const { blockNumber } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (blockNumber == "latest") {
      setBlockNum("");
    }
  }, [blockNumber]);

  const validation = (string) => {
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
                placeholder="Search by block number"
                size="sm"
                onChange={(event) => setBlockNum(event.target.value)}
                value={blockNum}
              />
            </Col>
            <Col xs={4} md={3}>
              <Button
                className={"w-100"}
                onClick={() => {
                  if (validation(blockNum)) {
                    navigate(`/block/${blockNum}`, { replace: false });
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
