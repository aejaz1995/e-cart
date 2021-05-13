import "./Css/Sample.module.css"
import React from "react"
const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [head, ...tail] = React.Children.toArray(children);
    
    return (
      <div
        className='menu'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {head}
        {isOpen && <div className='open'>{tail}</div>}
      </div>
    );
  };
  
  const Item = ({ children, onClick }) => {
    return (
      <div style={{border:'1px solid green'}} className='item' onClick={onClick}>
        {children}
      </div>
    );
  };
  
  export  const MenuInstance = ()=>{
    return(<div style={{border: '1px solid red', width: 'fit-content'}}>
        <Menu>
      <Item onClick={() => alert('Link one clicked!')}>Link One</Item>
      <Item onClick={() => alert('Link two clicked!')}>Link Two</Item>
      <Item onClick={() => alert('Link three clicked!')}>Link Three</Item>
    </Menu>
    </div>)
    
  }
  