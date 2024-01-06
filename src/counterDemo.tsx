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
        {state.error && <div className="mb-2 text-red-500"></div>}
        <button className="m-2 p-2 bg-success bg-gradient text-center">Increment</button>
        <button className="m-2 p-2 bg-danger bg-gradient text-center">Decrement</button>
    </div>
}