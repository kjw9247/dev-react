import axios from "axios";

export const deptListDB = async(params) => {
  console.log(params);
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_SPRING_IP+"dept/deptList",
      params: params
    })
    // console.log(res);
    console.log(res.data);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서목록 조회 실패", error);
  }
}