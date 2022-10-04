import React from 'react';

const GridItem = ({title, author, img}) => {

    return (
        <div className='grid__item'>
                <div className='grid__item__card'>
                    <div className='grid__item__card__info'>
                        <p className='grid__item__card__title'>{title}</p>
                        <p className='grid__item__card__subtitle'>Author: {author}</p>
                    </div>
            </div>
        </div>
    );
};

export default GridItem;