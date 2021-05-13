import React from 'react';
import  {Link} from 'react-router-dom';
import styled from "styled-components"

const SidebarLink =styled(Link)`
display:flex;
color: green;
justify-content:space-between;
align-items:center;

list-style:none;
height:60px;
text-decoration:none;
font-size:16px;
&:hover{
    background: orange;
    border-left:4px solid #fff;
    cursor:pointer;
}
`

const SidebarLabel = styled.span`
margin-left:16px;
margin-wigth:900px;
font-size:15px;
font-weight:bold;
color:white;
`
const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: orange;
    cursor: pointer;
  }
`;

export const SubMenu= ({item})=>{

    const [subNav, setSubNav] = React.useState(false)

    const showSubNav=()=>{

        setSubNav(!subNav)
    }
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
                <div style={{fontSize:'25px'}}>
                   &nbsp;&nbsp; {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed: null}
                </div>
            </SidebarLink>

            {subNav && item.subNav.map((item,index)=>{
                return <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </DropdownLink> 
            })}
        </>
    )
}