import './style.scss';

export interface TextareaProps {
    label: string;
    id: string;
    name?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className: string;
}

const Textarea = ({ label = '', ...props }) => {
    const {
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
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}

export default Textarea;