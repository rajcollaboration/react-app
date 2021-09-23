import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIncreaseHandler,setDecreaseHandler } from '../redux/Actions';

const About = () =>{
    const dispatch = useDispatch();
    const myReduxCounter = useSelector(state => state.myCounter);

    const increaseValue = ()=>{
        console.log("button clicked");
        dispatch(setIncreaseHandler());
    }
    const decreaseValue = ()=>{
        dispatch(setDecreaseHandler());
    }

    return (
        <div>
            <h1>About page</h1>
            <p>Count value {myReduxCounter}</p>
            <button onClick={increaseValue}>Increase</button>
        </div>
    )
}

export default About
