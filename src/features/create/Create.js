import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { actionCreators } from "../../app/actions";
import ReactDOM from "react-dom/client";
import categoriesSlice from "../category/categoriesSlice";

import { Button, Form, Tabs, Tab, NavItem } from "react-bootstrap";

import "./create.css";
import { addCategory } from "../category/categoriesSlice";
import Category from "../category/Category";

const Create = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [key, setKey] = useState("category");
  const [name, setName] = useState("category");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory({ name }));
  };

  /* function handlesubmit(e) {
    e.preventDefault();
    addcategory(dispatch);
  }*/
  return (
    <>
      <div className="categoryContainer">
        <h1> Crear elemento </h1>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="category" title="Categoria">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="Name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="item" title="Item">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Item name</Form.Label>
                <Form.Control type="Name" placeholder="Enter Name" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Category</Form.Label>
                <Form.Control type="password" placeholder="Enter Category" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="password" placeholder="Enter Image Url" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
/*
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>*/
export default Create;
