import React, { useState } from 'react';
type Props = {
    label: string;
    name?: string;
    hint?: string;
    errorText: string;
    initData?: string;
    onChange: any;
    validate: Function;
    type:string;
} ;

export default function TextField({
    label,
    name = label,
    hint = '',
    errorText,
    initData = '',
    onChange = () => {},
    validate,
    type='text',
}: Props) {
    function handle(event: React.FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
        setErr(validate(event.currentTarget.value));
        setTyped(true);
        onChange(event.currentTarget.value);
        // console.log('value: ' + event.currentTarget.value);
        // console.log('validate: ' + validate(event.currentTarget.value));
        // console.log('err: ' + err);
    }

    const [value, setValue] = useState(initData);

    const [err, setErr] = useState(true);

    const [typed, setTyped] = useState(false);


    return (
        <div className='w-full py-2'>
            <label htmlFor={name}>
                {label}
                <span className='text-sm text-red-500'> {hint}</span>
            </label>
            <input
                className='w-full border rounded border-gray-400 p-1 px-2 outline-none text-lg'
                name={name}
                id={name}
                value={value}
                onChange={handle}
                type={type}
            />
            <div className='w-full px-2 text-sm text-red-500'>{err && typed ? errorText : ''}</div>
        </div>
    );
}
