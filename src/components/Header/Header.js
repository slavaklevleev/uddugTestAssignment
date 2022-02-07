import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Row className="align-items-center">
        <Col md={6}>
          <p>Uddug Test Assignment</p>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search..."
            size="sm"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
