// import React from 'react'

// const MobilePage = () => {
//     const mobiles = ['samsung','vivo','redmi','oppo','apple']

//     return (
//         <div>
//             <ul style={{listStyle:'none',display:'flex'}}>
//                 {mobiles.map((item,index)=>{
//                     return (<li style={{marginLeft:'20px',padding:`5px`,border:'2px solid #ddd',borderRadius:'2px'}} key={index}>{item}</li>)
//                 })}
//                 </ul>
//             <h1>Mobiles</h1>
//         </div>
//     )
// }

// export {MobilePage}



import React from 'react'
import {getMobileProducts} from "../Utils/utils"
import { ProductCard } from '../Components/Card/ProductCard';
import {Cards} from "../Components/Css/CardWrapper"

const MobilePage = () => {
const [womenProducts, setWomenProducts] =React.useState([])
const [isLoading, setIsLoading] = React.useState(false)
const [isError, setIsError] = React.useState(false)
React.useEffect(()=>{

    getMobileProducts()
    .then((res)=>{
        setWomenProducts(res.data)
    })
    
},[])


    return (
        <>
            <h1>Mobiles</h1> <br/>
            <Cards  >
            {womenProducts.map((item)=>{
                return (<ProductCard key={item.id} {...item}/>)
            })} 
            </Cards>

        </>
    )
}

export {MobilePage}

