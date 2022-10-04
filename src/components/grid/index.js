import './grid.scss';
import React from 'react';
import Item from './item';

const itemsList = [
    {
        title: "All songs considered",
        author: "Tiesto"
    },
    {
        title: "All songs",
        author: "D"
    },
    {
        title: "Considered",
        author: "KI"
    },
    {
        title: "Maga",
        author: "Kul"
    }
];

const Grid = () => {

    return (
        <section className='grid'>
            <div className='grid__block'>
            { itemsList.map( p => ( <Item title={p.title} author={p.author}/>))}
            </div>
        </section>
    );
};

export default Grid;