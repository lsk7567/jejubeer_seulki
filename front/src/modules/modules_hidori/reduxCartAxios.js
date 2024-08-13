import axios from "axios";
import {
  setCartItem,
  setCartList,
  setCount,
  resetCount,
  deleteCartItem,
} from "../../reducer/reducer_hidori/cartReducer.js";
import { axiosGet, axiosPost } from "../reduxAxios";

/*
 * reset cart count
 */
export function resetCartCount() {
  return (dispatch) => {
    dispatch(resetCount());
  };
}

/*
 * cart count
 */
export async function getCount({ userId }) {
  const url = "http://localhost:8080/cart/count";
  const data = { userId: userId };

  return async (dispatch) => {
    const cart = await axiosPost({ url, data });
    const count = cart.count;
    dispatch(setCount({ count }));
  };
}

/*
 * cart list
 */
export function cartListAxios({ userId }) {
  const url = "http://localhost:8080/cart";
  const data = { userId: userId };

  return async (dispatch) => {
    const clist = await axiosPost({ url, data });
    dispatch(setCartList({ clist }));
  };
}

/*
 * cart item add
 */
export function cartItemAdd({ id, userId, qty }) {
  const url = "http://localhost:8080/cart/add";
  const data = {
    pid: id,
    userId: userId,
    qty: qty,
  };

  return async (dispatch) => {
    const cnt = await axiosPost({ url, data });
    dispatch(setCount(cnt));
  };
}

/*
 * cart item delete
 */

export function cartItemDelete({ ids, userId }) {
  const url = "http://localhost:8080/cart/delete";
  const data = { ids, userId };

  return async (dispatch) => {
    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        // 서버에서 반환된 데이터가 있으면 사용할 수 있음
        // 예: const deletedItems = response.data.deletedItems;
        dispatch(deleteCartItem(ids)); // 액션 디스패치
      } else {
        console.error("삭제 요청이 실패했습니다.", response.status);
        // 필요 시 사용자에게 알림
      }
    } catch (error) {
      console.error("삭제 요청 중 오류 발생:", error);
      // 필요 시 사용자에게 알림
    }
  };
}
