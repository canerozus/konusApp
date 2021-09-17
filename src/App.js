import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chats from "./components/Chat/Chat"
import Login from "./components/Login/Login"
import { AuthProvider } from "./components/Context/AuthContext"


function App() {

  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
