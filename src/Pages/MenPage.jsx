import React from 'react'
import {getProducts} from "../Utils/utils"
import { ProductCard } from '../Components/Card/ProductCard';

const MenPage = () => {
const [menProducts, setMenProducts] =React.useState([])
const [isLoading, setIsLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)
React.useEffect(()=>{

    getProducts()
    .then((res)=>{
        setMenProducts(res.data)
    })
    
},[])
console.log(menProducts)

    return (
        <div>
            <h1>MEN</h1> <br/>
            <div  style={{display: 'flex', flexDirection:'row',flexFlow:'row wrap'}}>
            {menProducts.filter((item)=>item.gender==='male').map((item)=>{
                return (<ProductCard key={item.id} {...item}/>)
            })} 
            </div>

        </div>
    )
}

export {MenPage}
