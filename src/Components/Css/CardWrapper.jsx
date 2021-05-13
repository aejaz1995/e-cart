import styled from "styled-components"
import React from 'react'
import * as FaIcons from "react-icons/fa"

export const CardWrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// max-width: 300px;
// height:fit-content;
// border:1px solid red;
margin: 20px auto;
margin-left:100px;
text-align: center;
font-family: arial;
margin-bottom:100px;
.price {
    color: grey;
    font-size: 22px;
  }
  @media(min-width:768px){
    
}
`
export const Button = styled.button`
margin-top:2px;
border: none;
outline: 0;
padding: 12px;
color: white;
background-color: ${(props)=>props.color};
text-align: center;
cursor: pointer;
width: 100%;
font-size: 18px;


&:hover {
    opacity: 0.7;
  }
`

//  style={{display: 'flex', flexDirection:'row',flexFlow:'row wrap',flexBasis:'500px'}}

export const Cards = styled.div`
display:flex;
flex-flow:row wrap;
`