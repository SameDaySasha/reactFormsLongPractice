import React from 'react';
import { useState} from 'react';
import { useInventoryContext } from '../contexts/InventoryProvider';
import { useHistory } from 'react-router-dom';

const Inventory = () => {
    const { setQValues} = useInventoryContext();
    const history = useHistory();

    const [value1, setValues1] = useState('');
    const [value2, setValues2] = useState('');
    const [value3, setValues3] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let res = [
            value1, value2, value3
        ];
        setQValues(res);

        history.push('/report');
    };


    return (
        <form onSubmit={handleSubmit} >
        <div><h2>Inventory</h2></div>
        <div className='inventory-question'>
            <p className='inventory-promt'>I learn the most when the lesson engages my sense of <em>sight</em>.</p>
            <select
                 name='q1'
                 onChange={(e) =>  setValues1(e.target.value)}
                 value={value1}
                 className='inventory-select'
            >
                <Options />
            </select>

        </div>
        <div className='inventory-question'>
            <p className='inventory-promt'>I learn the most when the lesson engages my sense of <em>hearing</em>.</p>
            <select
                 name='q2'
                 onChange={(e) =>  setValues2(e.target.value)}
                 value={value2}
                 className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className='inventory-question'>
            <p className='inventory-promt'>I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.</p>
            <select
                 name='q3'
                 onChange={(e) => setValues3(e.target.value)}
                 value={value3}
                 className='inventory-select'
            >
                <Options />
            </select>
        </div>
        <div className='form-buttons'>
        <button type='submit' disabled={!value1 || !value2 || !value3}>Submit</button>
        </div>

        </form>
    );
};


const Options = () => {
    return [
        <option key="prompt" value="" disabled>Select one...</option>,
        <option key="1" value="1">Strongly Disagree</option>,
        <option key="2" value="2">Disagree</option>,
        <option key="3" value="3">Neutral</option>,
        <option key="4" value="4">Agree</option>,
        <option key="5" value="5">Strongly Agree</option>
    ]
};

export default Inventory;
