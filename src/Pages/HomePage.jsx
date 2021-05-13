import { render } from '@testing-library/react'
import React from 'react'


const images = [`https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/RedmiNote9/GW/Feb/D18824494_BAU_RedmiNote9Series_MobileHero_1242x450._CB658892193_SY250_.jpg`


,`https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/GW/108MP/D20817719_WLD_Mi_Evo_series_BAU_mobhero_1242x450._CB658878823_SY250_.jpg`,
'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/February/Surface_banner-1500x300-re.jpg',
'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2021/MFS/FEB/Up/1_2.gif']

const HomePage = () => {

const [img, setImg] = React.useState(0)
const [start, setStart] =React.useState(0)

    let refId =React.useRef()

        React.useEffect(()=>{
            
            refId=setInterval(() => {
                img ==images.length-1 ? setImg(0) :setImg(img +1)  

            },3500)
        
            console.log(refId)
            return()=>{
                clearInterval(refId)
            }

        },[img])
            

    return (
        <div>
            {/* <h1>HOME</h1> */}
            <img width="100%" src={images[img]} alt=""/>
        </div>
    )
}

export {HomePage}
