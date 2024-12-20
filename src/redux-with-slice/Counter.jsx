import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addSkill } from './CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const skills = useSelector((state) => state.counter.skills);
    const dispatch = useDispatch();
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        dispatch(addSkill(newSkill));
        setNewSkill('');
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>Skills: {skills}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Enter new skill"
                />
                <button onClick={handleAddSkill}>Add Skill</button>
            </div>
        </div>
    )
}

export default Counter;