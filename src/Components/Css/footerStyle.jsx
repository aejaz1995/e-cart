import styled from "styled-components"

export const Container = styled.div`
padding: 80px 60px;
// background: radial-gradient(circle, rgba(92,39,251,1) , rgba(112,71,247,1));
background:black;

`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width:1000px;
margin:0 auto;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
//   border:5px solid red;
 
`;
export const Column = styled.div`
display:flex;
flex-direction:column;
text-align:left;
margin-left:60px;
// border:10px solid green;
`
export const Link = styled.a`
    color:grey;
    text-declaration;
    font-size:20px;
    margin-bottom:10px;
    &:hover{
        color:black;
        background:white;
        transition:200ms ease-in;
    }
`

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
//   background:yellow;
`;