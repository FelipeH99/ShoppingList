import React from "react";
import { string } from "prop-types";
import { Carousel, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import "./items.css";
import categoriesSlice from "../category/categoriesSlice";
import { selectItems } from "./itemsSlice";
// import { actionCreators } from "../../app/actions";

const Items = ({ category }) => {
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
      <Carousel className="itemsCarousel">
        {items
          ?.filter((item) => (category ? item.category === category : true))
          ?.map((item, index) => {
            return (
              <Carousel.Item className="carouselItem">
                <img
                  width="100px"
                  height="200px"
                  class="card-img-top"
                  className="imageitem"
                  // className="d-block w-100"
                  src={
                    item.image ||
                    "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                  }
                  alt="Card cap"
                />

                <Carousel.Caption>{item.name}</Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </ListGroup>
  );
};
Items.protoType = {
  category: string,
};

export default Items;
