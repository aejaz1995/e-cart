import logo from './logo.svg';
import './App.css';
import { SideBar } from './Components/SideBar';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom"
import { FooterContainer } from './Components/FooterContainer';
import { Routes } from './Routes/Routes';

function App() {
  console.log(process.env.REACT_APP_NAME)
  return (
    <div className="App">
      <div style={{backgroundColor:"white",border:"1px solid red"}}><h3>50% off on Mobiles & Laptops</h3></div>
          <SideBar />
          <Routes/>

        <div style={{position:'relative', top:'600px'}}>
            <FooterContainer  />
        </div>
    </div>
  );
}

export default App;
