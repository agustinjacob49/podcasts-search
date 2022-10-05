import React from 'react';
import getPodcastDetailsHOC from './view-hoc';
import parse from 'html-react-parser';
import './podcast-details.scss';

const View = ({ podcast }) => {

    const { author, title, details } = podcast;
    return (
        <div className="podcast-details">
            <aside className='podcast-details__aside'>
                <div className='podcast-details__aside__card'>
                    <div className="podcast-details__aside__card__container_img">
                        <img className='podcast-details__aside__card__img' src="https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/3e/bc/553ebc1f-75e1-6c3e-c9a3-de3bfc0a11e0/mza_11110635484606225985.png/250x250bb.jpg" alt="" />
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
            <div className='podcast-details__episodes'>
                <div className='podcast-details__episodes__title__container'>
                    <h2 className='podcast-details__episodes__title__container__h2'>Episodes: 66</h2>
                </div>
                <table  className='podcast-details__episodes__table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>KT Tunstall - Suddenly I See</td>
                            <td>1/3/2016</td>
                            <td>14:00</td>
                        </tr>
                        <tr>
                            <td>Clipping - Work Work</td>
                            <td>18/2/2016</td>
                            <td>15:03</td>
                        </tr>
                        <tr>
                            <td>The New Pornographers - Bill Brulsers</td>
                            <td>9/2/2016</td>
                            <td>12:18</td>
                        </tr>
                        <tr>
                            <td>Kelela - Rewind</td>
                            <td>28/1/2016</td>
                            <td>15:45</td>
                        </tr>
                        <tr>
                            <td>MGMT - Time To Pretend</td>
                            <td>19/1/2016</td>
                            <td>17:08</td>
                        </tr>
                        <tr>
                            <td>Courtney Barnett - Depreston</td>
                            <td>7/1/2016</td>
                            <td>17:00</td>
                        </tr>
                        <tr>
                            <td>Bjork - Stonemilker</td>
                            <td>17/12/2015</td>
                            <td>20:27</td>
                        </tr>
                        <tr>
                            <td>Dustin O'Halloran - Transparent (Main Title Theme)</td>
                            <td>11/12/2015</td>
                            <td>12:10</td>
                        </tr>
                        <tr>
                            <td>Wilco - Magnetized</td>
                            <td>3/12/2015</td>
                            <td>15:28</td>
                        </tr>
                        <tr>
                            <td>Natalia Lafourcade - Hasta La Raíz</td>
                            <td>23/12/2015</td>
                            <td>15:04</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default getPodcastDetailsHOC(View);