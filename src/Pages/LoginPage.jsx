// import React from 'react'

// const LoginPage = () => {
//     return (
//         <div>
//             <h1>Login</h1>
//         </div>
//     )
// }

// export {LoginPage}

import React from "react";
import axios from "axios"
import styles from "../Components/Css/LoginForm.module.css"

const LoginPage = () => {
  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] =React.useState(false)
  const [isError, setIsError] =React.useState(false)
  
    const focusInput =React.useRef()

  React.useEffect(()=>focusInput.current.focus(),[])
 


  return isLoading? <div>loading...</div>:(isError ? <div>something went wrong</div>:  (
    <div>
      <form  className={styles.loginForm}>
        
        <input 
          ref={focusInput}
          type="email"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />{" "}
        
        <br/>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        /> <br/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  ));
};

export { LoginPage };