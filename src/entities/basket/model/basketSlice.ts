import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  items: string[];
};

const initialState: TInitialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },

    clearBasket: () => initialState,
  },
});

export const { addItem, deleteItem, clearBasket } = basketSlice.actions;
