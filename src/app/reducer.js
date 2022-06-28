const initialState = {
  items: [],
};

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      inBasket: true,
    };
  });
}

function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {
            value: action.payload,
            inBasket: false,
          },
        ],
      };
    case "CLEAR_ITEMS":
      return {
        items: [],
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        items: updateObjectInArray(state.items, action),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItemFromList(state.items, action),
      };
    default:
      return state;
  }
}
