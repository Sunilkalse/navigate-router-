import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate=useNavigate()
  let [username,setusername]=useState("")
  let [password,setpassword]=useState()

  let handlesubmit=(e)=>{
    e.preventDefault()
  localStorage.setItem("username",username)
  localStorage.setItem("password",password)
  navigate("/Login")
  }

  return (
    <div id='signupDiv'>
      <h1>Signup page</h1>
      <table>
      <tr>
        <td>
        <label htmlFor="un">USERNAME :</label>

        </td>
        <td>
        <input type="text" id='un' placeholder="enter the number/mail'id" onChange={(e)=>{
          setusername(e.target.value)
        }}/></td></tr>
      <tr>
        <td>
        <label htmlFor="pass">PASSWORD :</label>

        </td>
        <td>
          <input type="password"id='pass' placeholder='set password' onChange={(e)=>{
          setpassword(e.target.value)}}/>
        </td>
      </tr>
      <tr>
        <td>
        <label htmlFor="pass">CONFIRM PASSWORD :</label>
        </td>
      <td>
      <input type="password" id='pass' placeholder='confirm password'/>

        </td></tr>
        <tr>
          <td>
            <button id='sign btn' onClick={handlesubmit}>submit</button>
            </td></tr></table>

    </div>
  )
}

export default Signup