import * as repository from "../repository/modifyRepository.js";

export const getUserInfo = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.json({ error: "User ID is required" });
    }
    const result = await repository.getUserInfo(userId);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getUpdateInfo = async (req, res) => {
  try {
    const { userId, phoneNumber, address, detailAddress } = req.body;
    if (!userId || !phoneNumber || !address || !detailAddress) {
      return res.json({
        error: "User ID, phonenumber, and address are required",
      });
    }
    const result = await repository.updateUserInfo({
      userId,
      phoneNumber,
      address,
      detailAddress,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
