import {
  setWishList,
  setCount,
  resetCount,
} from "../../reducer/reducer_hidori/wishReducer.js";
import { axiosGet, axiosPost } from "../reduxAxios.js";

/*
 * reset wish count
 */
export function resetWishCount() {
  return (dispatch) => {
    dispatch(resetCount());
  };
}

/*
 * wish count
 */
export async function getCount({ userId }) {
  const url = "http://localhost:8080/mypage/count";
  const data = { userId: userId };

  return async (dispatch) => {
    const wish = await axiosPost({ url, data });
    const count = wish.count;
    dispatch(setCount({ count }));
  };
}

/*
 * wishlist
 */
export function wishListAxios({ userId }) {
  console.log("wishList:userId -->", userId);
  const url = "http://127.0.0.1:8080/mypage/wishList";
  const data = { userId: userId };

  return async (dispatch) => {
    const wlist = await axiosGet({ url, data });
    dispatch(setWishList({ wlist }));
  };
}

/*
 * wish item add
 */
export function wishItemAdd({ id, userId }) {
  console.log("wishItemAdd:id -->", id);
  const url = "http://localhost:8080/mypage/add";
  const data = {
    pid: id,
    userId: userId,
  };

  return async (dispatch) => {
    const cnt = await axiosPost({ url, data });
    dispatch(setCount(cnt));
  };
}
