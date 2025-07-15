import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsPage from "./components/pages/NewsPage";
import LoginForm from "./components/auth/LoginForm";
import IndexPage from "./components/pages/IndexPage";
import SignUpPage from "./components/pages/SignUpPage";
import DeptPage from "./components/pages/DeptPage";
import DeptPageV2 from "./components/pages/DeptPageV2";
import DeptDetail from "./components/dept/DeptDetail";
import DeptDetailV2 from "./components/dept2/DeptDetailV2";
import { useState } from "react";
import EmpPage from "./components/pages/EmpPage";
import EmpDetail from "./components/emp/EmpDetail";

export default function App() {
  const [depts, setDepts] = useState([
    {deptno:1, dname:'개발부', loc:'제주'},
    {deptno:2, dname:'영업부', loc:'서울'},
    {deptno:3, dname:'총무부', loc:'대구'},
  ])
  
  //하위 콤포넌트에서 새 객체를 추가 요청하면 실행될 함수 구현
  const handleAdd = (newDept) => {
    setDepts([...depts, newDept])
    //setDepts(prev => [...prev, newDept]) //state hook 이전상태 기억한다
    //setDepts(prev => [...prev, {deptno:newDept.deptno, dname:newDept.dname, loc:newDept.loc}])
    //setDepts(prev => [...prev, {deptno:5, dname:'품질관리', loc:'부산'}])
  }
  //하위에서 기존 객체를 수정 요청하면 실행할 함수
  const handleUpdate = (newItem) => { 
    const index = depts.findIndex(item => item.deptno == newItem.deptno)
    console.log(index); // -1 : end of file
    depts[index].dname = newItem.dname
    depts[index].loc = newItem.loc
    setDepts([...depts])
  }
  const handleDelete = (pdept) => {
    console.log(pdept);
    const depts2 = depts.filter(item => item.deptno != pdept.deptno)
    setDepts([...depts2])
  }
  const onLogout = () => {
    console.log('로그아웃 호출');
  }
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Routes>
          <Route path="/" exact={true} 
          element={<NewsPage onLogout={onLogout} />} />
          <Route path="/login" exact={true} element={<LoginForm />} />
          <Route path="/emp" exact={true} element={<EmpPage />} />
          <Route path="/empDetail/:p_empno" exact={true} element={<EmpDetail />} />
          <Route path="/signup" exact={true} element={<SignUpPage />} />
          <Route path="/dept" exact={true} element={<DeptPage />} />
          <Route path="/deptDetail/:p_deptno" exact={true} element={<DeptDetail />} />
          <Route path="/dept2" exact={true} element={<DeptPageV2 depts={depts} onAddItem={handleAdd} />} />
          <Route path="/deptDetail2/:p_deptno" exact={true} element={<DeptDetailV2 depts={depts} onDeleteItem={handleDelete} onUpdateItem={handleUpdate} />} />
        </Routes>
      </div>
    </>
  );
}
