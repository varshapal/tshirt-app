import React, { useRef, useState } from 'react';
import Input from '../UI/Input';

import Card from "../UI/Card";
const AddTshirtForm = (props) => {
    const [enteredTshirtName, setEnteredTshirtName] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredQuantity, setEnteredQuantity] = useState('');

    const amountInputRef = useRef();


    const addTshirtHandler = (event) => {
        event.preventDefault();

        props.onAddTshirt(enteredTshirtName, enteredDesc, enteredPrice, enteredQuantity);
        setEnteredTshirtName('');
        setEnteredDesc('');
        setEnteredPrice('');
        setEnteredQuantity('');
    }

    const tshirtnameChangeHandler = (event) => {
        setEnteredTshirtName(event.target.value);
    }

    const tshirtdescChangeHandler = (event) => {
        setEnteredDesc(event.target.value);
    }

    const tshirtpriceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const tshirtqtyChangeHandler = (event) => {
        setEnteredQuantity(event.target.value);
    }


    return(
        <Card>
            <form onSubmit={addTshirtHandler}>
                <label htmlFor='tshirtname'>Tshirt Name</label>
                <input id='tshirtname' type="text" value={enteredTshirtName}  onChange={tshirtnameChangeHandler}/>
                <label htmlFor='tshirtdesc'>Tshirt Description</label>
                <input  id='tshirtdesc' type='text' value={enteredDesc}  onChange={tshirtdescChangeHandler}/>
                <label htmlFor='price'>Price</label>
                <input id='price' type='number'  value={enteredPrice} onChange={tshirtpriceChangeHandler}/>
                <label htmlFor='qty'>Quantity</label>
                <Input 
                    ref={amountInputRef}
                    label="Amount"
                    input={{
                        id: 'amount',
                        type: Number,
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }}
                />
                <button> + Add</button>
            </form>
        </Card>
    )
}

export default AddTshirtForm;