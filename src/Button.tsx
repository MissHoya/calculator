import React from 'react';
import './Button.css'

interface IProps {
    name?: string,
    operate?: boolean,
    handleClick: Function
}

const Button: React.FC<IProps> = (props) => {
    const className = [
        'button',
        props.operate ? 'operate' : ''
    ];

    const clickHandler = () => props.handleClick(props.name)

    return (
        <div className={className.join(' ').trim()} onClick={clickHandler}>
            <button>{props.name || props.children}</button>
        </div>
    );
};

export default Button;
