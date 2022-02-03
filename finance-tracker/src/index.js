import React from 'react'
import ReactDOM from 'react-dom'
import HomePageIndex from './HomePage/HomePageIndex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'




ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePageIndex />} />
    </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
