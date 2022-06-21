import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import categoriesSlice from "../category/categoriesSlice";
import { selectItems } from "./itemsSlice";
// import { actionCreators } from "../../app/actions";

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const addItemToBasket = (index) => {
    // dispatch(actionCreators.addToBasket(index));
  };

  const removeItemFromList = (index) => {
    // dispatch(actionCreators.removeItem(index));
  };
  return (
    <ListGroup className="m-4" variant="flush">
      {items?.map((item, index) => {
        return (
          <div class="card" style={{ width: "200px" }}>
            <img class="card-img-top" src={item.image} alt="Card cap" />
            <div class="card-body">
              <p class="card-text">{item.name}</p>
            </div>
          </div>
        );
      })}
    </ListGroup>
  );
};

export default Items;
