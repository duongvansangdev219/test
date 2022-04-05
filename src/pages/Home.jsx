import React, {useState, useEffect, useRef} from 'react';
import Input from '../components/Input';
import Axios from 'axios'
import { useHistory } from "react-router-dom";
import config from '../service/config';
import { setSessionStorage } from '../utilities/storage';
import { constant } from '../utilities/constant';
// https://api.openweathermap.org/data/2.5/weather?lat=10.8286935&lon=106.6884868&appid=35dba33a4b3d62be4dcf47dc5e298bd4
const Home =()=>{
    const history = useHistory();
    const imageRef_1 = useRef(null);
    const imageRef_2 = useRef(null);
    const imageRef_3 = useRef(null);
    const imageRef_4 = useRef(null);
    const imageRef_5 = useRef(null);
    const [height,setHeight] = useState(1.5);
    const [weight,setWeight] = useState(100);
    const [data,setData] = useState(null)
    const params = {
        lat:'10.8286935',
        lon:'106.6884868',
        apiKey:'35dba33a4b3d62be4dcf47dc5e298bd4'
    }

    const handleData =async()=>{
        const result = await Axios.get(`${config.HOST}/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${params.apiKey}`);
        setData(result.data)
    };

    const handleHeight= value =>{
        if(!isNaN(value.target.value)){
            let num = (value.target.value * 30).toString()
            setHeight(Number.parseFloat(num.slice(0,2)).toFixed(1) / 10)
        };
    };

    const handleWeight= value =>{
        if(!isNaN(value.target.value)){
            let num = (value.target.value * 2).toString()
            setWeight(num)
        };
    };

    const fieldHeight={ value:height, name:'Height' };
    const fieldWeight={ value:weight, name:'Weight' };
    
    const handleSubmit =() =>{
        // BMI = weight / (height * weight)
        let result = weight / (height * height)
        setSessionStorage(constant.RESULT,result)
        history.push(`result`)
    }
    const date = new Date();
    const time = date.getHours();
    // const time = 19

    useEffect(()=>{
        if(time <= 5 || time >= 18){
            imageRef_1.current.src = "./images/Path 76.svg"
            imageRef_2.current.src = "./images/Path 77.svg"
            imageRef_3.current.src = "./images/Path 78.svg"
            imageRef_4.current.src = "./images/Path 94.svg"
            imageRef_5.current.src = "./images/Group 44.svg"
            document.getElementsByClassName("container_top")[0].style.backgroundImage = "url('./images/Rectangle 7.svg')"
        }else{
            imageRef_1.current.src = "./images/Path 22.svg"
            imageRef_2.current.src = "./images/Path 23.svg"
            imageRef_3.current.src = "./images/Path 24.svg"
            imageRef_4.current.src = "./images/Path 48.svg"
            imageRef_5.current.src = "./images/Group 44.svg"
            document.getElementsByClassName("container_top")[0].style.backgroundImage = "url('./images/Rectangle 1.svg')"
        }
    },[time]);

    useEffect(()=>{
        handleData()
    },[]);

    let container_top ={
        maxWidth: "100%",
        height: "456px",
        display: "flex",
        flexDirection: "column",
    }

    return(
        <>
            <div className='container_top' style={container_top}>   
                <div className="above">
                    <img ref={imageRef_1} className='image_path22'/>
                    <img ref={imageRef_2} className='image_path23'/>
                    <img ref={imageRef_3} className='image_path24'/> 
                    <div className='box-sun'>
                        <img ref={imageRef_4} src="./images/Path 48.svg" className='image_path48'/>
                    </div>
                    <div className='temp'>
                        <h1>{data?.clouds?.all}<span>&#186; C</span></h1>
                        <p>Hồ Chí Minh</p>
                    </div>
                    <div className='wrapper'>
                        <div className='box-left'>
                            <img  src="./images/Group 12.svg" className='image_group12'/>
                            <img src="./images/Group 12.svg" className='image_group12-1'/>
                            <img src="./images/Group 12.svg" className='image_group12-2'/>
                        </div>
                        <div className='box-right'>
                            <img ref={imageRef_5}  className='image_group6'/>
                        </div>
                    </div>
                </div>
               <div className='below'>
                   <div className='box'>
                        <img src="./images/Group 29.svg" alt="group29" className='image_group29'/>
                        <p>{data?.main?.humidity}%</p>
                   </div>
                   <div className='box'>
                        <img src="./images/Group 35.svg" alt="group35" className='image_group35'/>
                        <p>{data?.main?.temp_max} C    <span>{data?.main?.temp_min} C</span></p>
                   </div>
                   <div className='box'>
                        <img src="./images/Group 41.svg" alt="group41" className='image_group41'/>
                        <p>{data?.wind?.speed} m/s</p>
                   </div>
               </div>
            </div>
            <div className='container-bt'>
                <div className='content'>
                    <h3>CALCULATE</h3>
                    <h1>YOUR BMI</h1>
                </div>
                <Input 
                    type="range" 
                    name="height"
                    field={fieldHeight}
                    handleChange={handleHeight}/>
                <Input
                    type="range" 
                    name="weight"
                    field={fieldWeight}
                    handleChange={handleWeight}/>
                <button onClick={handleSubmit} className="btn" >CALCULATE</button>
            </div>
        </>
    )
}
export default Home;
