import * as repository from "../repository/wishRepository.js";

// /*
//  * 위시리스트 : count
//  */

// export const getCount = async (req, res) => {
//   const { userId } = req.body;
//   const result = await repository.getCount(userId);
//   res.json(result);
//   res.end();
// };

// /*
//  * 위시리스트 추가 : insert
//  */
// export const insert = async (req, res) => {
//   const items = req.body;
//   const result = await repository.insert(items);
//   res.json(result);
//   res.end();
// };

// /*
//  * 위시리스트 전체 리스트 : getWishs
//  */
// export const getWishs = async (req, res) => {
//   const { userId } = req.body;
//   const wishList = await repository.getWishs(userId);
//   res.json(wishList);
//   res.end();
// };

/*
 * 주문 조회
 */
export const orderProduct = async (req, res) => {
  const orderData = req.body;
  /* console.log(orderData); */
  const result = await repository.orderProduct(orderData);
  res.json(result);
  res.end();
};

/*
 * 위시리스트 조회
 */
export const wishList = async (req, res) => {
  const wish = req.body;
  /*   console.log("wish-->", wish); */
  const result = await repository.wishList(wish);
  res.json(result);
  res.end();
};
