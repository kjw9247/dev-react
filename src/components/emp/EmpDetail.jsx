import React, { useEffect, useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
// EmpDetail페이지는 오라클 서버를 먼저 경유한다
// 
const EmpDetail = () => {
  // -> http://localhost:3000/empDetail/:p_empno
  // p_empno는 오라클 DB에서 가져오는 값이 아니다
  const {p_empno} = useParams() // 사원번호가 달라진다
  console.log(p_empno);
  const [emp, setEmp] = useState({
    empno: 0,
    ename: '',
    job: '',
    mgr: 0,
    hiredate: '',
    sal: 0,
    comm: 0,
    deptno: 0
  })
  useEffect(()=>{
    console.log('useEffect');
  },[p_empno]) // useMemo, useCallback
  const handleShow = () => {

  }
  const empDelete = () => {

  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="page-header">
          <h2>사원관리 <small>사원상세</small></h2>
          <hr />
        </div>
        <Card style={{ width: '58rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>사원번호 : {emp.empno}</ListGroup.Item>
            <ListGroup.Item>사원이름 : {emp.ename}</ListGroup.Item>
            <ListGroup.Item>JOB+ : {emp.job}</ListGroup.Item>
          </ListGroup>
          <div className='detail-link'>
            <Button variant="success" onClick={handleShow}>
              수정
            </Button>
            &nbsp;
            <Button variant="danger" onClick={empDelete}>
              삭제
            </Button>
            &nbsp;
            <Link to="/dept" className='nav-link'>부서목록</Link>
          </div>
        </Card>   
        <hr />
      </div>
      <Footer />
    </>
  )
}

export default EmpDetail