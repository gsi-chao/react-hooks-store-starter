import { TAction } from "./actions";
import { ITodoState } from "./initialState";

const reducer = (state: ITodoState, action: TAction): ITodoState => {
  const { type } = action;
  switch (type) {
    case "ADD_TASK":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_COMPLETE_TASK":
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (index === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
export default reducer;
