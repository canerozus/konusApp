import React, { useEffect } from "react"
import {  useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom"

import Chats from "./components/Chat/Chat"
import Login from "./components/Login/Login"


function App() {
  const mainUser = useSelector(state => state.Authenticate.user)
 
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <Switch>
          <Route path="/chats" component={Chats} />
          {mainUser ? <Redirect to='/chats'/> :  <Route path="/" component={Login} />}
        </Switch>
      </Router>
    </div>
  )
}

export default App
