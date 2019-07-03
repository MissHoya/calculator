import React from 'react';
import './Button.css'

interface IProps {
    name?: string,
    number?: boolean
}


const Button: React.FC<IProps> = (props) => {
    const className = [
        'button',
        props.number ? 'number' : ''
    ];
    return (
        <div className={className.join(' ').trim()}>
            <button>{props.name || props.children}</button>
        </div>
    );
};

export default Button;
