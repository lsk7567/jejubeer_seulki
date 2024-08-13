import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  count: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.list.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex > -1) {
        // 장바구니에 이미 존재하는 상품의 경우 수량 업데이트
        state.list[existingItemIndex].qty += newItem.qty;
      } else {
        // 장바구니에 존재하지 않는 경우 새 항목 추가
        state.list.push(newItem);
      }
      // 장바구니의 상품 개수 업데이트
      state.count = state.list.length;
    },
    setCartList(state, action) {
      state.list = action.payload.clist;
      state.count = state.list.length;
    },
    setCount(state, action) {
      state.count = action.payload.count;
    },
    resetCount(state) {
      state.count = 0;
    },
    deleteCartItem(state, action) {
      const deleteItems = action.payload;
      state.list = state.list.filter((item) => !deleteItems.includes(item.id));
      state.count = state.list.length;
    },
  },
});

export const {
  setCartItem,
  setCartList,
  setCount,
  resetCount,
  deleteCartItem,
} = cartReducer.actions;
export default cartReducer.reducer;
