// import React from 'react'

// const LaptopPage = () => {
//     return (
//         <div>
//             <h1>Laptops</h1>
//         </div>
//     )
// }

// export {LaptopPage}

import React from 'react'
import {getLaptopProducts} from "../Utils/utils"
import { ProductCard } from '../Components/Card/ProductCard';
import {Cards} from "../Components/Css/CardWrapper"

const LaptopPage = () => {
const [womenProducts, setWomenProducts] =React.useState([])
const [isLoading, setIsLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)
React.useEffect(()=>{

    getLaptopProducts()
    .then((res)=>{
        setWomenProducts(res.data)
    })
    
},[])
console.log(womenProducts)

    return (
        <>
            <h1>Laptops</h1> <br/>
            <Cards  >
            {womenProducts.map((item)=>{
                return (<ProductCard key={item.id} {...item} laptop/>)
            })} 
            </Cards>

        </>
    )
}

export {LaptopPage}

