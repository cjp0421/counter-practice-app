import React from "react";
import { useReducer } from "react";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
    const { type } = action;

    switch (type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount < 0;
            return {
                ...state, count: hasError ? state.count : newCount,
                //below "handles the error" by checking for the true/false and updates the property on the new object accordingly
                error: hasError ? "This counter does not allow negative numbers." : null,
            };
        }
        case "decrement": {
            //to restrict this counter to whole numbers and use the error capabilities of useReducer
            //below throws an error if the user tries to set the counter to a negative number
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            //instead of simply carrying out the count property update on the new state object
            //this checks if hasError is true or false 
            //which either allows or prevents the state object property change on the new object returned

            return {
                ...state, count: hasError ? state.count : newCount,
                //below "handles the error" by checking for the true/false and updates the property on the new object accordingly
                error: hasError ? "This counter does not allow negative numbers." : null,
            };
        }
        default:
            return state;
    }
}

export default function CounterDemo() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });
    return <div className="counter-tutorial">
        <div>Count: {state.count}</div>
        {state.error && <div className="m-2 text-danger">{state.error}</div>}
        <button className="m-2 p-2 bg-success bg-gradient text-center" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button className="m-2 p-2 bg-danger bg-gradient text-center" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
}