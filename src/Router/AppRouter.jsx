import React from 'react'
import { Route, Router, Routes } from 'react-router'
import About from '../pages/About'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'

import ProductList from '../pages/products/ProductList'

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
             <Router path ="countrypage" element={<ProductList/>}/>
            <Route path="country/:countryId" element={<ProductDetails />} />
            <Route path='*' element={<NotFound />} />
          

        </Routes>
    )
}

export default AppRouter