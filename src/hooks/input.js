import { useState } from 'react';

export const useInput = (initValue) => {
    
    const [value, setValue] = useState(initValue)
    const [isDirty, setDirty] = useState(false)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur
    }
}