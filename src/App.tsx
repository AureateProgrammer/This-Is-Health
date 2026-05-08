import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import { Socialize } from './pages/Socialize'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/socialize" element={<Socialize />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
