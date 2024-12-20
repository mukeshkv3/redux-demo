import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addSkill } from './CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const skills = useSelector((state) => state.counter.skills);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>Skills: {skills}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <button onClick={() => dispatch(addSkill())}>Add Skill</button>
        </div>
    );
};

export default Counter;