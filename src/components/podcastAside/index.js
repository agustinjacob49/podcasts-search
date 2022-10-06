import React from 'react';
import parse from 'html-react-parser';
import './podcastAside.scss';
import Image from '../img';

const PodcastAside = ({ author, title, details, id, img }) => {

    return (
        <aside className='podcast-details__aside'>
                <div className='podcast-details__aside__card'>
                    <div className="podcast-details__aside__card__container_img">
                        <Image className='podcast-details__aside__card__img' src={img} />
                    </div>
                    <hr />
                    <div className='podcast-details__aside__card__titles'>
                        <h1 className='podcast-details__aside__card__titles_content'>{title}</h1>
                        <p className='podcast-details__aside__card__titles_content p-italic'>by {author}</p>
                    </div>
                    <hr />
                    <div className='podcast-details__aside__card__description'>
                        <h2 className='podcast-details__aside__card__description__h2'>Description:</h2>
                        <p className="podcast-details__aside__card__description__p p-italic">{parse(details)}</p>
                    </div>
                </div>
        </aside>
    );
};


export default PodcastAside;