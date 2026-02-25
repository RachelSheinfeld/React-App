import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";

import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import { AppLayaout } from "../components/AppLayaout";
import ProductList from "../pages/products/ProductList";
import ProductDetails from "../pages/products/ProductDetails";
import CountryPage from "../pages/CountryPage";


const router = createBrowserRouter([
    {
        element: <AppLayaout />, children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },            
            {
                path: "countrypage", element:<ProductList/> 
                
            },
{
  path: "productdetails/:countryId",
  element: <ProductDetails />
} ,
            { path: "*", element: <NotFound /> }
        ]
    }])

export default router