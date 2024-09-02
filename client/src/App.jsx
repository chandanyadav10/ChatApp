import React from "react"
import Left from './components/left/left' 
import Right from "./components/right/right"
import Logout from "./components/left1/Logout"
import Signup from "./components/pages/Signup"
import Login from "./components/pages/Login"


function App() {

  return (
    <>
      <div className="flex">
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
        <Signup></Signup>
        <Login></Login>
      </div>
    </>
  )
}

export default App
