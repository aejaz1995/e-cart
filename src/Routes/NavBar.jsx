// import React from 'react'
// import  {Link} from "react-router-dom"
// import styles from "../Components/Css/NavBar.module.css"
// const NavBar = ({children}) => {
//     const [toggle, setToggle] =React.useState(false)
//    const [head, ...tail] =React.Children.toArray(children)
//     const handleBlock=()=>{
//         setToggle()
//     }

    


//     return (
//         <nav className={styles.nav}>
//             <span onMouseOut={()=>setToggle(false)} onClick={()=>setToggle(true)} style={{border:'1px green solid'}}>Fashion  </span>
            
//             {head}
//                  <div   style={toggle ? {display:'block'}: {display:'none'}}> 
//                  <ul onMouseOver={()=>setToggle(true)} style={{border:'1px solid green',marginTop:'-1px'}}>
//                      <li>
//                          hi
//                      </li>
//                  </ul>
                 
//                  </div>
//         </nav>
//     )
// }

// export {NavBar}
