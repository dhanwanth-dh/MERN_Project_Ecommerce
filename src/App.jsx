import React from 'react'

import Navbar from './Components/Navbar.jsx'

import Dashboard from './Pages/Dashboard.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Profile from './Pages/Profile.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Color } from 'ogl'

const Layout = () => {
    const location = useLocation();
    const hide = ['/login', '/signup']
    const textColor = ['/about']

    const hideLayout = hide.includes(location.pathname)
    const hi = textColor.includes(location.pathname)
    return (
        <>
            {!hideLayout && <Navbar />}
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </>
    )
}

const App = () => {
    return (
        <>

            {/* <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Signup></Signup>
            <Login></Login>
            <Products></Products>
            */}

            {/* <Router>
                <div>
                    <Navbar></Navbar>
                </div>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/delivery' element={<Delivery />} />
                    <Route path='/deals' element={<Deals />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router> */}
            <Router>
                <Layout />
            </Router>
        </>
    )
}

export default App