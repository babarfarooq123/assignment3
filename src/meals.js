import React from 'react';

function Meals(props){
    return (
        <div className="Meals">
            <h1>DISH # 1 = {props.dish1}</h1>
            <h1>DISH # 2 = {props.dish2}</h1>
            <h1>DISH  = {props.dish3}</h1>
        </div>
    );
}

export default Meals;