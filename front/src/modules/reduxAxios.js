import axios from "axios";

//* Get Method
export async function axiosGet({ url, data }) {
  try {
    const response = await axios.get(url, { params: data }); // 데이터는 쿼리 파라미터로 전달
    return response.data;
  } catch (error) {
    console.error("Axios GET error:", error);
    throw error;
  }
}

//* Post Method
export async function axiosPost({ url, data }) {
  let result = null;
  try {
    result = await axios({
      method: "POST",
      url: url,
      data: data,
    }).then((res) => res.data);
  } catch (error) {
    console.error("Error in axiosPost:", error);
  }

  return result;
}
