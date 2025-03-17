import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./component/home page/homepage"
import UserProfile from "./component/home page/user/profile"
import ForgotPassword from "./component/home page/Login/forgotPassword"
import ResetPassword from "./component/home page/Login/resetPassword"
import Feedback from "./component/home page/user/feedback"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
   
  )
}

export default App
