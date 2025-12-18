import React from 'react'

import Navbar from './Components/Navbar.jsx'

import Dashboard from './Pages/Dashboard.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Profile from './Pages/Profile.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import AdminDashboard from './Dashboard/adminDashboard.jsx'
import Addproducts from './Dashboard/addProduct.jsx'
import Addadmin from './Dashboard/addAdmin.jsx'

import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import { Color } from 'ogl'

const Layout = () => {
    const location = useLocation();
    const hide = ['/login', '/signup']
    const textColor = ['/about']

    const hideLayout = hide.includes(location.pathname)
    const navbarColor = location.pathname === "/about" ? "text-white" : "text-black-500";
    return (
        <>
            {!hideLayout && <Navbar col={navbarColor} />}
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/adminDashboard' element={<AdminDashboard />} />
                <Route path='/addadmin' element={<Addadmin />} />
                <Route path='/addproduct' element={<Addproducts />} />
            </Routes>
        </>
        // <>
        //     <Navbar></Navbar>
        //     <AdminDashboard></AdminDashboard>
        //     <Addproducts></Addproducts>
        // </>
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