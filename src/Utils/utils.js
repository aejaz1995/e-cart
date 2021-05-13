import axios from "axios"


export function getProducts(){
    
    return axios.get(`https://rocky-badlands-29705.herokuapp.com/fashion`)
}

export function getWomenProducts(){
    
    return axios.get(`http://localhost:3000/women`)
}

export function getMobileProducts(){
    
    return axios.get(`https://rocky-badlands-29705.herokuapp.com/mobile`)
}

export function getLaptopProducts(){
    
    return axios.get(`https://rocky-badlands-29705.herokuapp.com/laptop`)
}


