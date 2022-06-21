import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "./categoriesSlice";
// import { actionCreators } from "../../app/actions";
import Items from "../items/Items"
const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const addItemToBasket = (index) => {
    // dispatch(actionCreators.addToBasket(index));
  };

  const removeItemFromList = (index) => {
    // dispatch(actionCreators.removeItem(index));
  };
  console.log("categories", categories);
  return (
    <>
    {categories?.map((category)=>{
        return (<div><h1>{category.name}</h1><Items></Items></div>)
    })}
    </>

  );
};

export default Category;