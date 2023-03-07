import React from 'react'
import Nav from './Nav'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'


const App = () => {
  return (
    <div>
        <Router>
            {/* <Nav/> */}
            <Routes>
                <Route path='/' element={<Login/>}/>
                 <Route path='/login' element={<Signup/>}/>
                <Route path='/Signup' element={<Home/>}/>
                <Route path='/Home' element={<Home/>}/>
           </Routes>
        </Router>
        <h1></h1>
    </div>      
  )
}

export default App