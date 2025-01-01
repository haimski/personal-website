import { FC } from 'react';
import './style.scss';

export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string;
    onClick: () => void;
    className: string;
}

const Button:FC<ButtonProps> = ({
    type = 'button',
    text,
    onClick,
    className = 'bg-blue-500 hover:bg-blue-600 text-white font-bold px-4'
}) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;