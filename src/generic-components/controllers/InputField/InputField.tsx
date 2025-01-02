import React, { FC } from 'react';
import './style.scss';

export interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    className: string;
    isError?: boolean;
    errorMessage?: string;
}

const InputField: FC<InputFieldProps> = ({ label, ...props }) => {
    const {
        type,
        id,
        name = 'name',
        placeholder = '',
        value= '',
        onChange,
        onBlur,
        className,
        isError = false,
        errorMessage = ''
    } = props;

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`input-field ${className}`}
            />
            <div className="text-red-500 text-xs">
                {isError && errorMessage}
            </div>
        </div>
    )
}

export default InputField;