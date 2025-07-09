import axios from "axios";
// select는 Rest API GET메서드 사용하고 파라미터는 쿼리스트링을 이용함
export const deptListDB = async(params) => {
  console.log(params);
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_TOMCAT_IP+"dept/deptList",
      params: params
    })
    // console.log(res);
    console.log(res.data);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서목록 조회 실패", error);
  }
}

export const deptDetailDB = async(params) => {
  console.log(params); // {deptno:50}
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_TOMCAT_IP+"dept/deptDetail",
      params: params
    })
    // console.log(res);
    console.log(res.data);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서상세 조회 실패", error);
  }
}// end of deptDetailDB
/*

Postman -> Body -> form전송 or 객체리터럴(onChange)
// 아래 파라미터는 객체리터럴 방법인 경우에 해당함
{
    "deptno": 50,
    "dname": "개발부",
    "loc": "제주"
}

*/

export const deptInsertDB = async(dept) => {
  console.log(dept);
  try {
    const res = await axios({
      method: "post", // 405에러 뜨면 API메서드를 맞추지 못한것이다
      url: process.env.REACT_APP_TOMCAT_IP+"dept/deptInsert",
      data: dept
    })
    // console.log(res);
    console.log(res); // 1아니면 0이기때문에 data는 없다
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서등록 조회 실패", error);
  }
}// end of deptInsertDB

// put이랑 post는 데이터 넘겨주는 방법이 같음
export const deptUpdateDB = async(dept) => {
  console.log(dept);
  try {
    const res = await axios({
      method: "put", // 405에러 뜨면 API메서드를 맞추지 못한것이다
      url: process.env.REACT_APP_TOMCAT_IP+"dept/deptUpdate",
      data: dept
    })
    // console.log(res);
    console.log(res); // 1아니면 0이기때문에 data는 없다
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서수정 조회 실패", error);
  }
}// end of deptUpdateDB

// DELETE FROM dept WHERE deptno=?
export const deptDeleteDB = async(params) => {
  console.log(params); // {deptno:50}
  try {
    const res = await axios({
      method: "delete",
      url: process.env.REACT_APP_TOMCAT_IP+"dept/deptDelete",
      params: params
    })
    // console.log(res);
    console.log(res);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("부서삭제 조회 실패", error);
  }
}// end of deptDeleteDB