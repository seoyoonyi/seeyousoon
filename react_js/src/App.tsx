import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from '@/pages/About'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

import './App.css'
//FIXME: Sass 설정(필요없을 시 삭제)
import './styles/global.scss'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
