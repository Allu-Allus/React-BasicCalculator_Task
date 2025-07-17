import { useState } from 'react'
import './App.css'

function App() {
 const [input,setInput]= useState("")
 const display = (num) => {
  setInput((value)=>value +=num)
 }
const clr = () => {
  setInput((value)=>value.slice(0,-1))
}
const allClear = () => {
  setInput("")
}
const equalTo = () => {
  try{
    setInput(eval(input))
  } catch{
    setInput("ERROR")
    setTimeout(()=>{
      setInput("")
    },1000)
  }
}


  return (
    <>
 <div className=" d-flex justify-content-center align-items-center m-5 rounded-2 ">
<div className="card shadow p-3 rounded-4 bg-dark " style={{ width: "500px" }}>
   <div className="card-body">
    <h1 className='text-white text-center'>CALCULATOR</h1>
      <input type="text" value={input} className='form-control ' placeholder='0' style={{width:"100%",height:"60px", textAlign:"right"}} readOnly />
     </div>
     <div className="d-flex justify-content-around mb-3">
      <div onClick={() => clr('Clr')} className=" btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px" }}>C</div>
      <div onClick={() => allClear('DEL')} className=" btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>AC</div>
      <div onClick={() => display('%')} className=" btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>%</div>
      <div onClick={() => display('/')} className=" btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>/</div>
     </div>
     <div className="d-flex justify-content-around mb-3">
      <div onClick={() => display('7')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>7</div>
      <div onClick={() => display('8')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>8</div>
      <div onClick={() => display('9')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>9</div>
      <div onClick={() => display('*')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>*</div>
     </div>
     <div className="d-flex justify-content-around mb-3">
      <div onClick={() => display('5')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>5</div>
      <div onClick={() => display('4')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>4</div>
      <div onClick={() => display('6')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>6</div>
      <div onClick={() => display('-')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>-</div>
     </div>
     <div className="d-flex justify-content-around mb-3">
      <div onClick={() => display('1')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>1</div>
      <div onClick={() => display('2')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>2</div>
      <div onClick={() => display('3')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>3</div>
      <div onClick={() => display('+')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>+</div>
     </div>
     <div className="d-flex justify-content-around mb-3">
      <div onClick={() => display('.')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>.</div>
      <div onClick={() => display('0')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"70px",height:"60px"}}>0</div>
      <div onClick={() => equalTo('=')} className="btn border shadow d-flex justify-content-center align-items-center text-white fw-bold fs-5	" style={{width:"190px",height:"60px"}}>=</div>
     </div>
   </div>
</div>
    </>
  )
}

export default App
