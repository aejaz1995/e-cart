
import React from 'react'
import {getProducts} from "../Utils/utils"
import { ProductCard } from '../Components/Card/ProductCard';
import {Cards} from "../Components/Css/CardWrapper"
const WomenPage = () => {
const [womenProducts, setWomenProducts] =React.useState([])
const [isLoading, setIsLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)
React.useEffect(()=>{

    getProducts()
    .then((res)=>{
        setWomenProducts(res.data)
    })
    
},[])


    return (
        <>
            <h1>WOMEN</h1> <br/>
            <Cards  >
            {womenProducts.filter((item)=> item.gender=='female').map((item)=>{
                return (<ProductCard key={item.id} {...item}/>)
            })} 
            </Cards>

        </>
    )
}

export {WomenPage}
