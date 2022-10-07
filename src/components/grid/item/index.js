import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../img';

const GridItem = ({title, author, cover, id}) => {

    return (
        <Link to={`/podcast/${id}`} className="link">
            <div className='grid__item'>
                    <Image src={cover} alt="cover" className="grid__item__img"/>
                    <div className='grid__item__card'>
                        <div className='grid__item__card__info'>
                            <p className='grid__item__card__title'>{title}</p>
                            <p className='grid__item__card__subtitle'>Author: {author}</p>
                        </div>
                </div>
            </div>
        </Link>
    );
};

export default GridItem;