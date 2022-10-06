import React from "react";
import { useNavigate } from 'react-router-dom'
import "./table.scss";


const Table = ({ episodes, podcastId }) => {
    const navigate = useNavigate();

    const handleOnClick = (index) => {
        navigate(`/podcast/${podcastId}/episode/${index}`);
    };

    let isGrey = false;
    return (
        <table className="podcast-details__episodes__card_container__table">
        <thead>
            <tr>
            <th className="table__episode__title">Title</th>
            <th className="table__episode__title">Date</th>
            <th className="table__episode__time">Duration</th>
            </tr>
        </thead>
        <tbody>
            {episodes && episodes.map((episode, index) => {
                const backgroundGrey = isGrey;
                const { date, episodeTitle, duration } = episode;
                isGrey = !isGrey;
                return (
                        <tr onClick={() => { handleOnClick(index)}} className="table__row" style={{backgroundColor: backgroundGrey ? "rgb(245 245 245)" : "white"}}>
                            <td className="table__episode__title">{episodeTitle}</td>
                            <td className="table__episode__title">{date}</td>
                            <td className="table__episode__time">{duration}</td>
                        </tr>
                );
            })}
        </tbody>
        </table>
    );
};

export default Table;
