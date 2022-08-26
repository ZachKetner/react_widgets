import React from 'react'
import Accordion from './Accordion';

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

export default function App() {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}
