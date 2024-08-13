import axios from "axios";
import {
  getProductDetail,
  getProductList,
} from "../../reducer/reducer_ryu/productListReducer";

export const productListAxios = () => {
  // console.log("listaxios=>");
  return async (dispatch) => {
    try {
      const url = "http://localhost:8080/product/all";
      const pList = await axios({
        method: "post",
        url: url,
      }).then((res) => res.data);

      dispatch(getProductList({ pList }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const productDetail = ({ pid }) => {
  return async (dispatch) => {
    try {
      const url = `http://localhost:8080/product/${pid}`;
      const detail = await axios({
        method: "get",
        url: url,
        // data: { pid: pid },
      }).then((res) => res.data);
      dispatch(getProductDetail({ detail }));
    } catch (error) {
      console.log(error);
    }
  };
};
// export const productDetail = ({ pid }) => {
//   console.log("axios pid=>", pid);
//   return async (dispatch) => {
//     try {
//       const url = `http://localhost:8080/product/detail`;
//       const detail = await axios({
//         method: "post",
//         url: url,
//         data: { pid: pid },
//       }).then((res) => res.data);
//       dispatch(getProductDetail({ detail }));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
