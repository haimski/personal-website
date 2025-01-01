import { FC } from 'react';
import './style.scss';

export interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
}

const InputField: FC<InputFieldProps> = ({ label, ...props }) => {
    const {
        type,
        id,
        name = 'name',
        placeholder = '',
        value,
        onChange,
        className
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
                className={`input-field ${className}`}
            />
        </div>
    )
}

export default InputField;