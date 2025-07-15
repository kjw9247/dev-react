import React, { useEffect, useState } from 'react'
import EmpRow from './EmpRow'
import { Button, Modal } from 'react-bootstrap'
import { MyInput } from '../style/FormStyle'
import { empInsertDB, empListDB } from '../../service/empService'

/* 
리액트는 SPA 기본값이다
리액트 사용하는 장점 - 상태값, props가 바뀌면 화면을 다시 그린다
부분갱신 처리가 가능하다
*/
const EmpList = () => {
  const [emps, setEmps] = useState([])
  const [empno, setEmpno] = useState(0)
  const [ename, setEname] = useState('')
  const [job, setJob] = useState('')
  const [mgr, setMgr] = useState(0)
  const [hiredate, setHiredate] = useState('')
  const [sal, setSal] = useState(0) // 초기값이니 0.0, 0 둘다됨
  const [comm, setComm] = useState(0)
  const [deptno, setDeptno] = useState(0)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleEmpno = (value) => {
    setEmpno(value)
  }
  const handleEname = (value) => {
    setEname(value)
  }
  const handleJob = (value) => {
    setJob(value)
  }
  const handleMgr = (value) => {
    setMgr(value)
  }
  const handleHiredate = (value) => {
    setHiredate(value)
  }
  const handleSal = (value) => {
    setSal(value)
  }
  const handleComm = (value) => {
    setComm(value)
  }
  const handleDeptno = (value) => {
    setDeptno(value)
  }
  const empInsert = async() => {
  }


  const empSearch = async() => {
    console.log("empSearch");
    const gubun = document.querySelector("#gubun").value
    const keyword = document.querySelector("#keyword").value
    console.log(`${gubun}, ${keyword}`);
    const emp = {gubun:gubun, keyword:keyword}
    const res = await empListDB(emp)
    console.log(res.data);
    setEmps(res.data)
  }

  const empList = async() => {
    const emp = {gubun:null, keyword:null}
    const res = await empListDB(emp)
    setEmps(res.data)
  }
  return (
    <>
      <div className='container'>
        <div className='page-header'>
          <h2>사원관리<small>사원목록</small></h2>
          <hr />
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <select id="gubun" name="gubun" >
              <option value="">분류선택</option>
              <option value="empno">사원번호</option>
              <option value="ename">사원명</option>
              <option value="job">JOB</option>
            </select>
          </div>
          <div className='col-sm-6'>
            <input type="text" id="keyword" className='form-control' placeholder='검색어를 입력하세요' />
          </div>
          <div className='col-sm-3'>
            <button type="button" className='btn btn-danger' onClick={empSearch}>검색</button>
          </div>
        </div>
        <div className='test-list'>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>사원번호</th>
                <th>사원명</th>
                <th>JOB</th>
                <th>부서명</th>
              </tr>
            </thead>
            {/* 데이터셋 연동하기 */}
            {/* props로 넘어온 상태값이 빈 깡통이면 실행하지 않기 */}
            <tbody>
            {Object.keys(emps).map(key => (
              <EmpRow key={key} emp={emps[key]} />
            ))}
            </tbody>
            {/* 데이터셋 연동하기 */}
          </table>
          <hr />
          <div className='list-footer'>
          <button className="btn btn-warning" onClick={empList}>전체조회</button>
          &nbsp;
          <button  className="btn btn-success" onClick={handleShow}>글쓰기</button>
          </div>  
        </div>      
      </div>

    {/* ========================== [[ 테스트등록 Modal ]] ========================== */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>사원등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="empno" placeholder="Enter 사원번호" onChange={(event)=>{handleEmpno(event.target.value)}} />
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="ename" placeholder="Enter 사원명" onChange={(e)=>{handleEname(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="job" placeholder="Enter JOB" onChange={(e)=>{handleJob(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="mgr" placeholder="Enter 그룹코드" onChange={(e)=>{handleMgr(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="hiredate" placeholder="Enter 입사일자" onChange={(e)=>{handleHiredate(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="sal" placeholder="Enter 급여" onChange={(e)=>{handleSal(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="comm" placeholder="Enter 인센티브" onChange={(e)=>{handleComm(e.target.value)}}/>
          </div>
          <div style={{display: 'flex'}}>
            <MyInput type="text" id="deptno" placeholder="Enter 부서번호" onChange={(e)=>{handleDeptno(e.target.value)}}/>
          </div>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={empInsert}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>     

    </>
  )
}

export default EmpList