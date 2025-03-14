import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./component/home page/homepage"
import UserProfile from "./component/user/profile"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
   
  )
}

export default App
