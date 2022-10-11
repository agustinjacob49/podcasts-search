import './grid.scss';
import React, { memo } from 'react';
import Item from './item';

const Grid = ({ podcasts }) => {

    return (
        <section className='grid'>
            <div className='grid__block'>
            { podcasts && podcasts.map( p => ( <Item title={p.title} author={p.author} id={p.id} cover={p.cover} key={`${p.id}-${p.author}`}/>))}
            </div>
        </section>
    );
};

export default memo(Grid);