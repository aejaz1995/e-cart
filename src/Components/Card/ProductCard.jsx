import styled from "styled-components"
import React from 'react'
import * as FaIcons from "react-icons/fa"
import {CardWrapper, Button} from "../Css/CardWrapper"
// const CardWrapper = styled.div`
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// max-width: 300px;
// margin: 20px auto;

// text-align: center;
// font-family: arial;

// .price {
//     color: grey;
//     font-size: 22px;
//   }
// `
// const Button = styled.button`
// margin-top:2px;
// border: none;
// outline: 0;
// padding: 12px;
// color: white;
// background-color: ${(props)=>props.color};
// text-align: center;
// cursor: pointer;
// width: 100%;
// font-size: 18px;

// // button hover
// &:hover {
//     opacity: 0.7;
//   }
// `






const ProductCard = ({img,price,laptop,company,desc}) => {
    // const {processor} =desc
    return <CardWrapper>
            <img src={img} alt="Denim Jeans" style={{width:`300px`,height:`400px`, borderBottom:`1px solid #ddd`}}></img>
            <p className="price"><FaIcons.FaRupeeSign/>{price}</p> 
            {laptop && <h3 style={{marginTop:'-20px'}}>{company}&nbsp;&nbsp;{desc.processor}</h3>}
        <Button color="black">Add to Cart</Button><br/>
        {/* <Button color="orange">Buy Now</Button> */}
    </CardWrapper>
}

export {ProductCard}
