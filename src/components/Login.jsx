import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from"./login.css"
import { toast, Toast } from 'react-toastify'

const Login = () => {
  let [username,setusername]=useState("")
  let [password,setpassword]=useState()

  let navigate=useNavigate()

  let handlesubmit=(e)=>{
    e.preventDefault()
    let un=localStorage.getItem("username",username)
    let pass=localStorage.getItem("password",password)
    if (un==username && pass==password) {
      toast.success(`${username} Succesfully logged in`)
      navigate("/Home")
    }else{
      toast.error(`please check username and password`)
      navigate("/Login")
    }
  }
  return (
    <div id='login'>
    
                                <h1>Login page</h1>
      <table>
        
        <tr>
          <td>
          <label htmlFor="un">Username/email :</label>
          </td>
          <td><input type="text" id='un' placeholder='enter username' onChange={(e)=>{
            setusername(e.target.value)
          }}/></td>
        </tr>
        <tr>
          <td>
          <label htmlFor="pass">Password :</label> </td>
          <td><input type="password" id='pass'  placeholder='enter password' onChange={(e)=>{
            setpassword(e.target.value)
          }}/></td>
        </tr>
        <tr>
          <td>
            <strong>forgot password?</strong><h3></h3>
            <button onClick={handlesubmit}>submit</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Login
