import { createSlice } from "@reduxjs/toolkit";

/* 공유데이터 */
const initialState = {
  list: [],
  detail: {},
};

/* 리듀서 생성함수 */
const productListReducer = createSlice({
  name: "productList",
  initialState,
  reducers: {
    getProductList(state, action) {
      state.list = action.payload.pList;
    },
    getProductDetail(state, action) {
      state.detail = action.payload.detail;
    },
  },
});

export const { getProductList, getProductDetail } = productListReducer.actions;
export default productListReducer.reducer;
