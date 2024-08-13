import * as repository from "../repository/reviewRepository.js";

/**
 * 구매평 리스트 가져오기
 */
export const getProductReview = async (req, res) => {
  const params = req.body;
  const result = await repository.getProductReview(params);
  console.log('params =>', params);
  res.json(result);
};

/**
 * 구매평 갯수 가져오기
 */
export const getCountReview = async (req, res) => {
  const result = await repository.getCountReview();
  res.json(result);
};