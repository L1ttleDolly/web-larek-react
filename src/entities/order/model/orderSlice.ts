import { createSlice } from "@reduxjs/toolkit";
import type { TOrder } from "../../../shared/types/types.ts";

const initialState: TOrder = {
  payment: null,
  email: "",
  phone: "",
  address: "",
  total: "",
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.payment = action.payload.payment;
    },
    setAddress: (state, action) => {
      state.address = action.payload.address;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
  },
});

export const { setPaymentMethod, setAddress, setEmail, setPhone } = orderSlice.actions;
