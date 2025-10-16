import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MyNav from '../components/MyNav';
import Layout from '../Layout/Layout';
import Today from '../pages/Today/Today.jsx';
import Complete from '../pages/Complete/Complete.jsx'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Today />}></Route>
            <Route path='Complete' element={<Complete />}></Route>
        </Route>
    </Routes>
  )
}

export default AppRouter