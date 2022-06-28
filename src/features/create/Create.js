import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { actionCreators } from "../../app/actions";
import ReactDOM from "react-dom/client";

import { Button, Form, Tabs, Tab, NavItem } from "react-bootstrap";

import "./create.css";
import { addCategory } from "../category/categoriesSlice";
import Category from "../category/Category";
import { addItem } from "../items/itemsSlice";

const Create = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [key, setKey] = useState("category");
  const [name, setName] = useState("");
  const [keyi, setKeyI] = useState("item");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory({ name }));
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    dispatch(addItem({ name, category, image }));
  };
  return (
    <>
      <div className="categoryContainer">
        <h1> Create element </h1>
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
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="item" title="Item">
            <Form onSubmit={handleSubmitItem}>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Item name</Form.Label>
                <Form.Control
                  type="Name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="text">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="category"
                  placeholder="Enter Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  placeholder="Enter Image Url"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>

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
export default Create;
