import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './user/pages/Home'
import Preloader from './components/Preloder'
import Books from './user/pages/Books'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import Aunth from './pages/Aunth'
import Pnf from './pages/Pnf'
import AdminCollections from './Admin/pages/AdminCollections'
import AdminHome from './Admin/pages/AdminHome'
import AdminProfile from './Admin/pages/AdminProfile'


function App() {

  const [loading,setLoading]=useState(true)


  setTimeout(()=>{
    setLoading(false)
  },7500)

  return (
    <>
      <Routes>  
        <Route path='/' element={loading?<Preloader/>:<Home/>} />

        <Route path='/login' element={<Aunth/>} />
        <Route path='/register' element={<Aunth insideRegister={true}/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/user/profile' element={<Profile/>} />
        <Route path='/books/:id/view' element={<View/>} />
        <Route path='/admin/home' element={<AdminHome/>} />
        <Route path='/admin/profile' element={<AdminProfile/>} />
        <Route path='/admin/collections' element={<AdminCollections/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
    </>
  )
}

export default App
