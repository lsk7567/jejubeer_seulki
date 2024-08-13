import { createSlice } from "@reduxjs/toolkit";

//* 공유 데이터
const initialState = {
  list: [],
  count: 0,
};

/*
 * 리듀서 생성함수
 */

const wishReducer = createSlice({
  name: "wish",
  initialState,
  reducers: {
    setWishList(state, action) {
      state.list = action.payload.wlist;
    },
    setCount(state, action) {
      state.count = state.count + 1;
    },
    resetCount(state, action) {
      state.count = 0;
    },
  },
});

export const { setWishList, setCount, resetCount } = wishReducer.actions;
export default wishReducer.reducer;
