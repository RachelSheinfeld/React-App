import React from 'react'
import countries from '../../data/data'
import { Link } from 'react-router-dom';


const ProductList = () => {

  return (
    <div>
        <h2>Hello  countries list</h2>
        {countries.map(countries => (
            <div key={countries.id}>
                <Link to={`/productdetails/${countries.id}`}>{countries.name}</Link>
            </div>
        ))}  
    </div>
    
  )
}

export default ProductList