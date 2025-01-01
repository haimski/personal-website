import { FC } from 'react';

export interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button:FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;