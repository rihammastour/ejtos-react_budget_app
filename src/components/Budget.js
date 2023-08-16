import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, remaining, currency, budget, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);    

    const onChange = (value) => {
        if(value <= 20000 && value > totalExpenses)
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        
        if( value > 20000 )
            alert("You can't exceed remaining funds "+ currency + remaining)

        if(value <= totalExpenses)
            alert("Budget is lower than spending")
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step="10"
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => onChange(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
