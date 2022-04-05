import * as React from 'react';
import { useHistory } from "react-router-dom";
import { constant } from '../utilities/constant';
import getSessionStorage from '../utilities/storage';

const Result =()=>{
    const imageRef = React.useRef(null);
    const history = useHistory();
    const[state,setState] = React.useState('');
    
    const handleGoBack=()=>{
        history.goBack()
    }
    
    let result = getSessionStorage(constant.RESULT);
    let toFixedNumber = Number(result).toFixed(1)

    React.useEffect(()=>{
        if(toFixedNumber >= 40){
            imageRef.current.src = "./images/Group 133.svg"
            setState("Extreme Obesity")
        }else if(toFixedNumber === 30 && toFixedNumber <= 39.9){
            imageRef.current.src = "./images/Group 128.svg"
            setState("Obesity")
        }else if(toFixedNumber == 25 && toFixedNumber <= 29.9){
            imageRef.current.src = "./images/Group 123.svg"
            setState("Overweight")
        }else if(toFixedNumber == 18.5 && toFixedNumber <= 24.9){
            imageRef.current.src = "./images/Group 118.svg"
            setState("Normal weight")
        }else if(toFixedNumber < 18.5){
            imageRef.current.src = "./images/Group 113.svg"
            setState("UnderWeight")
        }
    },[])

    return(
       <>
            <div className='container__result'>
                <div className="text">
                    <h2 className='text-result'>YOUR RESULT</h2>
                    <p className='resultBMI'>{toFixedNumber}</p>
                    <p className='result'>{state}</p>
                </div>
                <img ref={imageRef} src="./images/Group 135.svg" className='image_Group135' />
                <button className='button' onClick={handleGoBack}>
                    Go Back
                </button>
            </div>
       </>
    )
}
export default Result