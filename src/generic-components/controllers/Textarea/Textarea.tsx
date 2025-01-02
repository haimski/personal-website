import './style.scss';
import React from "react";

export interface TextareaProps {
    label: string;
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    className: string;
    isError?: boolean;
    errorMessage?: string;
}

const Textarea = ({ label = '', ...props }) => {
    const {
        id,
        name = 'name',
        placeholder = '',
        value,
        onChange,
        onBlur,
        className,
        isError = false,
        errorMessage = ''
    } = props;
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={className}
            />
            <div className="text-red-500 text-xs">
                {isError && errorMessage}
            </div>
        </div>
    )
}

export default Textarea;