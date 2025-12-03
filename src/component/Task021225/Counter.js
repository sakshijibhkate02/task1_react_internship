import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
    switch (action.type) {
        case "increment5":
            return state + 5;
        case "decrement5":
            return state - 5;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => dispatch({ type: "increment5" })}>Increment by 5</button>
            <button onClick={() => dispatch({type:"decrement5" })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
        </div>
    );
}

export default Counter;
