import React from 'react'
import { IconContext } from 'react-icons/lib';
import styled from "styled-components"
import {Link} from  'react-router-dom'
import  * as FaIcons  from 'react-icons/fa'
import * as AiIcons from "react-icons/ai"
import {SideBarData} from "./SideBarData"
import { SubMenu } from './SubMenu'
const Nav =  styled.div`
background: orange;
height:80px;
width:100%;
display:flex;
border:1px solid black;
justify-content:space-between;
align-items:center;
// position:fixed;

`
const NavIcon = styled(Link)`
margin-left: 2rem;
font-size:2rem; 
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;

`
const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
    width:100%;

`
const NavLink = styled(Link)`

`
const SideBar = () => {
    const [sidebar, setSidebar] =React.useState(false)

    const showSidebar =()=>{
        setSidebar(!sidebar)
        
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
                <Link to="/" style={{marginLeft:'-50%', textDecoration:'none',color:'black'}}> <h1>Home</h1></Link>
                <Link to="/login" style={{marginLeft:'100px', textDecoration:'none',color:'black'}}> <h1>Log In</h1></Link>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon> 

                    {SideBarData.map((item, index)=>{
                        return <SubMenu item={item} key={index}/>
                    }) }
                </SidebarWrap>
            </SidebarNav>    
            </IconContext.Provider>

        </>
    )
}

export {SideBar}
