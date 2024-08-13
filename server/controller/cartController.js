import * as repository from "../repository/cartRepository.js";

/*
 * 장바구니 :  count
 */

export const getCount = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getCount(userId);
  res.json(result);
  res.end();
};

/*
 * 장바구니 추가 : insert
 */
export const insert = async (req, res) => {
  console.log(req.body);
  const items = req.body;
  const result = await repository.insert(items);
  res.json(result);
  res.end();
};

/*
 * 장바구니 전체 리스트 : getCarts
 */
export const getCarts = async (req, res) => {
  const { userId } = req.body;
  const cartList = await repository.getCarts(userId);
  res.json(cartList);
  res.end();
};

/*
 * 장바구니 삭제 : delete
 */
export const deleteCarts = async (req, res) => {
  const { ids, userId } = req.body;
  const result = await repository.deleteCarts({ ids, userId });
  res.json(result);
  res.end();
};

/*
 * 주문하기
 */

export const orderProduct = async (req, res) => {
  const orderData = req.body;
  /*   console.log("orderController -->", orderData); */
  const result = await repository.orderProduct(orderData);
  res.json(result);
  res.end();
};
