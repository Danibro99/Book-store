import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Preloader from './components/Preloder'

function App() {

  return (
    <>
      <Routes>  
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
    </>
  )
}

export default App
