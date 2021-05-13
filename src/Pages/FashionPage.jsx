import React from 'react'
import {getProducts} from "../Utils/utils"
import { ProductCard } from '../Components/Card/ProductCard';

const FashionPage = () => {
        
    const [products, setProducts] =React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)

React.useEffect(()=>{

    getProducts()
    .then((res)=>{
        setProducts(res.data)
    })
},[])



    return (
        <div style={{marginTop:'100px'}}>
            <div  style={{display: 'flex', flexDirection:'row',flexFlow:'row wrap'}}>
            {products.map((item,index)=>{
                if(item.id>3 && item.id<products.length){
                    return (<ProductCard key={index} {...item}/>)
                }
            })} 
            </div>

        </div>
    )
}

export {FashionPage}
