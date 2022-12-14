import React, { useState, useEffect, useRef } from 'react'

function Dropdown({ label, options, selected, onSelectedChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
            };
            document.body.addEventListener("click", onBodyClick, { capture: true });

            return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        };

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
                >
                {option.label}
            </div>
        );
    });

    const renederedText = options.map((option) => {
        if (option.value === selected.value) {
            return (
                <div key={option.value} style={{ marginTop: '30px' }}>
                    <span style={{ color: option.value }}>This text is {option.value}!</span>
                </div>)
        };
        return null;
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label" style={{ marginTop: '20px' }}>{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active': ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}> 
                        {renderedOptions}
                    </div>
                </div>
            </div>
                <div>
                    {renederedText}
                </div>
        </div>
    );
}

export default Dropdown;