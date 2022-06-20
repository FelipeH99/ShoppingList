const initialState = {
  items: []
}

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      inBasket: true
    }
  })
}

function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index)
}
export default function appReducer(state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {            
            value: action.payload,
            inBasket: false
          }
        ]
      };
      case "CLEAR_ITEMS": 
        return {
          items: []
        };
      case "ADD_TO_BASKET":
        return {
          ...state,
          items: updateObjectInArray(state.items, action)
        };
      case "REMOVE_ITEM":
        return {
          ...state,
          items: removeItemFromList(state.items, action)
        };
    default:
      return state;
  }
};
/*  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }
  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  
  // Use the initialState as a default value
  export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'todos/todoAdded': {
        // We need to return a new state object
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          todos: [
            // with all of the old todos
            ...state.todos,
            // and the new todo object
            {
              // Use an auto-incrementing numeric ID for this example
              id: nextTodoId(state.todos),
              text: action.payload,
              completed: false
            }
          ]
        }
      }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }*/