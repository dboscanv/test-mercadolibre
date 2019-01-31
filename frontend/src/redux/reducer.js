import {
  SET_SEARCH_FIELD,
  SET_ITEMS,
  SET_ITEM,
  SET_CATEGORIES,
  CLEAR_ITEMS,
  CLEAR_SEARCH_FIELD
} from "./actionTypes";

const initialState = {
  items: [],
  categories: [],
  search: "",
  selectedItem: "",
  noItems: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_FIELD: {
      const { text } = action.payload;
      return { ...state, search: text };
    }
    case SET_ITEMS: {
      const { items, categories } = action.payload;
      const noItems = items.length ? false : true;
      return { ...state, items, categories, noItems };
    }
    case SET_CATEGORIES: {
      const { categories } = action.payload;
      return { ...state, categories };
    }
    case SET_ITEM: {
      const { selectedItem } = action.payload;
      return { ...state, selectedItem };
    }
    case CLEAR_ITEMS: {
      return { ...state, items: [], categories: [] };
    }
    case CLEAR_SEARCH_FIELD: {
      return { ...state, search: "" };
    }
    default:
      return state;
  }
}
