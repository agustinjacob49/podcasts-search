import React, { memo } from 'react';
import parse from 'html-react-parser';
import './podcastAside.scss';
import Image from '../img';
import { Link } from 'react-router-dom';

const PodcastAside = ({ author, title, details, id, img }) => {

    return (
        <aside className='podcast-details__aside'>
                <div className='podcast-details__aside__card'>
                    <div className="podcast-details__aside__card__container_img">
                        <Link to={`/podcast/${id}`} className="link"> <Image className='podcast-details__aside__card__img' src={img} /> </Link>
                    </div>
                    <hr />
                    <div className='podcast-details__aside__card__titles'>
                        <Link to={`/podcast/${id}`} className="link"><h1 className='podcast-details__aside__card__titles_content'>{title}</h1></Link>
                        <Link to={`/podcast/${id}`} className="link"><p className='podcast-details__aside__card__titles_content p-italic'>by {author}</p></Link>
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


export default memo(PodcastAside);