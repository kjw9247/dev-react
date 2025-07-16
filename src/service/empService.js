import axios from "axios";

// 사원등록 모달에서 이미지 파일을 선택하면 이미지를 업로드 처리
// 미리보기 기능 추가
export const uploadImageDB = async(file) => {
  const formData = new FormData()
  formData.append("image", file)
  try {
    const res = await axios({
      method: 'post',
      url: process.env.REACT_APP_SPRING_IP + 'emp/imageUpload',
      data: formData
      // headers 생량가능 -> axios가 자동으로 Content-Type 처리
    })
    // 실제 선택한 파일명이 중복 될 수 있으므로 8000번 서버측에서 파일명을 갱신함
    // 변경된 이름을 8000번에서 받아와야 한다
    return res 
  } catch (error) {
    console.error("error", error);
  }
}

// select는 Rest API GET메서드 사용하고 파라미터는 쿼리스트링을 이용함
export const empListDB = async(params) => {
  console.log(params);
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_SPRING_IP+"emp/empList",
      params: params
    })
    // console.log(res);
    console.log(res.data);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("사원목록 조회 실패", error);
  }
}

export const empDetailDB = async(params) => {
  console.log(params); // {empno:50}
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_SPRING_IP+"emp/empDetail",
      params: params
    })
    // console.log(res);
    console.log(res.data);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("사원상세 조회 실패", error);
  }
}// end of empDetailDB
/*

Postman -> Body -> form전송 or 객체리터럴(onChange)
// 아래 파라미터는 객체리터럴 방법인 경우에 해당함
{
    "deptno": 50,
    "dname": "개발부",
    "loc": "제주"
}

*/

export const empInsertDB = async(emp) => {
  console.log(emp);
  try {
    const res = await axios({
      method: "post", // 405에러 뜨면 API메서드를 맞추지 못한것이다
      url: process.env.REACT_APP_SPRING_IP+"emp/empInsert",
      data: emp
    })
    // console.log(res);
    console.log(res); // 1아니면 0이기때문에 data는 없다
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("사원등록 실패", error);
  }
}// end of empInsertDB

export const empUpdateDB = async(emp) => {
  console.log(emp); // 화면에서 입력된 ㄱ밧
  try {
    const res = await axios({
      method: "put", // 405에러 뜨면 API메서드를 맞추지 못한것이다
      url: process.env.REACT_APP_SPRING_IP+"emp/empUpdate",
      data: emp
    })
    // console.log(res);
    console.log(res); // 1아니면 0이기때문에 data는 없다
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("사원수정 실패", error);
  }
}// end of empUpdateDB

// DELETE FROM dept WHERE deptno=?
export const empDeleteDB = async(params) => {
  console.log(params); // {deptno:50}
  try {
    const res = await axios({
      method: "delete",
      url: process.env.REACT_APP_SPRING_IP+"emp/empDelete",
      params: params
    })
    // console.log(res);
    console.log(res);
    return res // 필요에 따라 res 혹은 res.data
  } catch (error) {
    console.error("사원삭제 실패", error);
  }
}// end of deptDeleteDB


