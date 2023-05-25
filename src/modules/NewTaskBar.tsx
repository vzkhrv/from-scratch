import { useState } from "react"
import { AddButton } from "src/components/AddButton";
import { Input } from "src/components/Input";
import { validateHeaderMax, validateHeaderMin } from "src/utils/helpers";
import { useDispatch } from 'react-redux'
import { addTask } from "src/store/taskSlice";

import './styles.css';

export const NewTaskBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (validateHeaderMax(value)) {
            dispatch(addTask(value));
            setValue('');
        }
    }

    return (
        <div className="new-task-bar">
            <Input value={value} onChange={(val) => setValue(val)} />
            <AddButton onClick={handleAdd} disabled={!validateHeaderMin(value)} />
        </div>
    )
}