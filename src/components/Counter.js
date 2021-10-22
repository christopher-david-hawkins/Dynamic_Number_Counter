import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {

    const [count, setCount] = useState(0)
    var counterNode;

    const handleIncrement = (e) => {
        if(parseInt(counterNode.value) % 1 == 0){
            setCount(count + parseInt(counterNode.value))
            e.preventDefault();
        }
        else{
            alert("Please use a valid number")
        }
    }

    const handleDecrement = (e) => {
        if(parseInt(counterNode.value) % 1 == 0){
            setCount(count - parseInt(counterNode.value))
            e.preventDefault();
        }
        else{
            alert("Please use a valid number")
        }
    }
    
    return(
        <>
        <form>
            <input ref={c => (counterNode = c)} placeHolder="Enter a number"></input>
            <Button onClick={handleIncrement}>Add</Button>
            <Button onClick={handleDecrement}>Minus</Button>
        </form>
        <span>{count}</span>
        </>
    )
}

export default Counter;