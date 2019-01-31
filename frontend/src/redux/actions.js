import {
  SET_SEARCH_FIELD,
  SET_ITEMS,
  SET_ITEM,
  SET_CATEGORIES,
  CLEAR_SEARCH_FIELD,
  CLEAR_ITEMS
} from "./actionTypes";

export const setSearch = text => ({
  type: SET_SEARCH_FIELD,
  payload: {
    text
  }
});

export const setItems = ({ items, categories }) => ({
  type: SET_ITEMS,
  payload: {
    items,
    categories
  }
});

export const selectItem = selectedItem => ({
  type: SET_ITEM,
  payload: {
    selectedItem
  }
});

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: {
    categories
  }
});

export const clearItems = () => ({
  type: CLEAR_ITEMS,
  payload: {}
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH_FIELD,
  payload: {}
})
