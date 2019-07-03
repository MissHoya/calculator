import React from 'react';
import Button from './Button'
import './ButtonPanel.css'

const SVG: React.FC = () => {
    return (
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="82"
             height="54">
            <path
                d="M941.03552 175.90272h-618.496a72.66304 72.66304 0 0 0-53.63712 23.79776L29.14304 463.27808a72.68352 72.68352 0 0 0 0 97.792l239.616 263.20896a72.68352 72.68352 0 0 0 54.53824 23.81824h617.73824a72.704 72.704 0 0 0 72.72448-72.704v-527.1552a72.704 72.704 0 0 0-72.72448-72.33536z m-618.496 599.8592l-239.616-263.5776 239.616-263.5776h618.496v527.1552z m0 0"
                fill="#007fff"/>
            <path
                d="M773.44768 370.93376a36.39296 36.39296 0 0 0-51.44576 0L632.03328 460.8l-89.98912-89.8048a36.352 36.352 0 1 0-51.44576 51.2l90.89024 89.98912-90.89024 90.89024a36.37248 36.37248 0 0 0 51.44576 51.44576l89.98912-90.89024L722.944 654.52032a36.37248 36.37248 0 0 0 51.42528-51.44576l-90.89024-90.89024 90.89024-89.98912a36.352 36.352 0 0 0-0.90112-51.2z m0 0"
                fill="#007fff"/>
        </svg>
    )
};

const ButtonPanel: React.FC = () => {
    return (
        <div className="button-panel">
            <div className="grid-1">
                <Button name="C"/>
                <Button name="÷"/>
                <Button name="x"/>
                <Button><SVG/></Button>
            </div>
            <div className="grid-1">
                <Button name="7" number/>
                <Button name="8" number/>
                <Button name="9" number/>
                <Button name="-"/>
            </div>
            <div className="grid-1">
                <Button name="4" number/>
                <Button name="5" number/>
                <Button name="6" number/>
                <Button name="+"/>
            </div>
            <div className="grid-2">
                <div className="button-group">
                    <div>
                        <Button name="1" number/>
                        <Button name="2" number/>
                        <Button name="3" number/>
                    </div>
                    <div>
                        <Button name="%" number/>
                        <Button name="0" number/>
                        <Button name="." number/>
                    </div>
                </div>
                <div className="button-result">
                    <Button name="="/>
                </div>
            </div>
        </div>
    );
};

export default ButtonPanel;
