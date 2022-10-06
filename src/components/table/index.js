import React from "react";
import "./table.scss";

const Table = ({ episodes }) => {
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
            {episodes && episodes.map((episode) => {
                const backgroundGrey = isGrey;
                const { date, episodeTitle, duration } = episode;
                isGrey = !isGrey;
                return (
                    <tr className="table__row" style={{backgroundColor: backgroundGrey ? "rgb(245 245 245)" : "white"}}>
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
