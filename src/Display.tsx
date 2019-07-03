import React from 'react';
import './Display.css'

const Display: React.FC = () => {
    return (
        <div className='display'>
            <input className="display-input" type="text" defaultValue="321"/>
            <div className="display-preview">123</div>
        </div>
    );
};

export default Display;
