import { createSlice } from "@reduxjs/toolkit";

// 공유데이터
const initialState = {
  isLogin: false,
  userInfo: null,
};

// 리듀서 생성함수
const memberReducer = createSlice({
  name: "member",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      if (action.payload.cnt === 1) {
        alert("로그인 성공!");
        state.isLogin = true;
      }
    },
    setIsLogout(state, action) {
      state.isLogin = false;
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { setIsLogin, setIsLogout, setUserInfo } = memberReducer.actions;
export default memberReducer.reducer;
