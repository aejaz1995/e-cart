import React from 'react'
import {Container, Wrapper,Row, Column,Title, Link} from './Css/footerStyle'

const Footer = ( props) => {
    return <Container {...props} style={{color:props.color}}>{props.children}</Container>
}

export {Footer}

export const FooterWrapper=(props) => {
    return (<Wrapper {...props} style={{color:props.color}}>{props.children}</Wrapper>)
}

export const FooterRow=(props)=>{
    return (<Row>{props.children}</Row>)
}

export const FooterColumn=(props)=>{
    return (<Column>{props.children}</Column>)
}

export const FooterLink=(props)=>{
    return (<Link>{props.children}</Link>)
}

export const FooterTitle=(props)=>{
    return (<Title>{props.children}</Title>)
}