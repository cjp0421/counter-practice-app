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
    </div>
}