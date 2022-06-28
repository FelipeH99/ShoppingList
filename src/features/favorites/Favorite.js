import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../category/categoriesSlice";
import { useNavigate } from "react-router-dom";
// import { actionCreators } from "../../app/actions";

import { Modal, Button, CloseButton } from "react-bootstrap";

import Items from "../items/Items";

import "./favorite.css";

const Favorite = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const navigate = useNavigate();

  const addItemToBasket = (index) => {
    // dispatch(actionCreators.addToBasket(index));
  };

  const removeItemFromList = (index) => {
    // dispatch(actionCreators.removeItem(index));
  };

  console.log("categories", categories);
  return (
    <>
      <div className="categoryContainer">
        {categories?.map((category) => {
          return (
            <div className="item">
              <h1>{category.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorite;
