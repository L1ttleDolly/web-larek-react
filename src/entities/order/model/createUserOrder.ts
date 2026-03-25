import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOrder } from "../../../shared/api/api.ts";
import type { TUserData } from "../../../shared/types/types.ts";
import { clearBasket } from "../../basket/model/basketSlice.ts";

export const createUserOrder = createAsyncThunk("order/createUserOrder", async (order: TUserData, { dispatch }) => {
  const res = await createOrder(order);
  dispatch(clearBasket());
  return res;
});
