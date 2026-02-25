import React from 'react'
import { useParams,Link  } from 'react-router-dom'
import countries from '../../data/data'

const ProductDetails = () => {
    const { countryId } = useParams()
    const country = countries.find(p => p.id === Number(countryId))


    return (
        
       <>
            
            
            <h2>Name: {country.name}</h2>
            <h2>capital:{country.capital}</h2>
            <h2>food:{country.food}</h2>

            <img src={country.img} style={{ width: "300px" }} />
            <br></br>
            
            <Link to="/countrypage">
                <button>country</button>
            </Link>
        </>
    )
}

export default ProductDetails