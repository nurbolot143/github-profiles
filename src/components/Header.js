import React, { Profiler, useState } from "react";
import logo from "../resources/img/logo.png";

import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Header = ({ usersLoaded }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      usersLoaded(inputValue);

      setInputValue("");
    }
  };

  return (
    <header className="pt-2 pb-2" style={{ background: "#000" }}>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Logo" style={{ width: 40 }} />
          </Col>
          <Col style={{ minWidth: "77%" }}>
            <Form className="d-flex" onSubmit={onSubmit}>
              <FormControl
                outline="danger"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={inputValue}
                onChange={onChange}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
