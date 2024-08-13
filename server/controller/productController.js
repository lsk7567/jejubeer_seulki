import * as repository from "../repository/productRepository.js";

/* 전체 상품 가져오기 */
export const getProductAll = async (req, res) => {
  const result = await repository.getProductAll();
  res.json(result);
};

/* 상품 상세 가져오기 */
export const getDetailProduct = async (req, res) => {
  const pid = req.params.pid;
  const result = await repository.getDetailProduct(pid);
  res.json(result);
};

/* 신규 상품 등록하기 */
export const insertProduct = async (req, res) => {
  const form = req.body;
  // console.log("컨트롤러=>", form);
  const result = await repository.insertProduct(form);
  res.json(result);
};

/* 상품 삭제하기 */
export const deleteProduct = async (req, res) => {
  const { pid } = req.body;
  // console.log(pid); ==> 11
  const result = await repository.deleteProduct(pid);
  res.json(result);
};

/* 상품 수정하기 */
export const modifyProduct = async (req, res) => {
  const formData = req.body;
  // console.log("컨트롤러 =>", formData);
  const result = await repository.modifyProduct(formData);
  res.json(result);
};

/* 위시리스트 가져오기 */
export const getWishList = async (req, res) => {
  const selectedProduct = req.body;
  console.log(selectedProduct);
  /*   console.log(userId); */
  const result = await repository.getWishList(selectedProduct);
  res.json(result);
  res.end();
};
