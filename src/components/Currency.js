import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { dispatch } = useContext(AppContext);
 
    const onChange = (value) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: value,
            });
        
      
    };
    return (
       <select style={{backgroundColor:"#94e39a"}} onChange={(event) => onChange(event.target.value)}>
           	<option value="$">$ Dollar</option>
	        <option value="£" selected="selected">£ Pound</option>
	        <option value="€">€ Euro</option>
	        <option value="र">र Ruppee</option>
       </select>
    );
};
export default Currency;
