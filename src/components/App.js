import React, { useState } from 'react'
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        title: 'What is React',
        content: 'React is a front emd javascript framework'
    },
    {
        title: 'What use React',
        content: 'React is a favorite JS library amoung engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    } 
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'A Shade of Purple',
        value: 'purple'
    },
    {
        label: 'The Color Pink',
        value: 'pink'
    },
    {
        label: 'A Hint of Yellow',
        value: 'yellow'
    },
];


export default function App() {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>    
            <Route path="/list">
                <Search />
            </Route>    
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>    
            <Route path="/translate">
                <Translate />
            </Route>    
        </div>
    );
}
