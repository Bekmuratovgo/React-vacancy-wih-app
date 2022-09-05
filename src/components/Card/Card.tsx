import React, { FC } from "react";
import { CardProps } from "../../interface";
import './Card.css'

const Card: FC<CardProps> = ({ item }) => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__wrapper_blockFirst">
                    <img src={item.url} alt="img" />
                    <div className="card__wrapper_data">
                        <div className="card__wrapper_author">
                            <h5>Author:</h5>
                            <h5>{item.name}</h5>
                        </div>
                        <div className="card__wrapper_company">
                            <h5>company:</h5>
                            <h5>{item.company.name}</h5>
                        </div>
                    </div>
                </div>
                <div className="card__wrapper_blockSecond">
                    <p className="card__wrapper_title">{item.title}</p>
                    <p className="card__wrapper_desc">{item.body}</p>
                </div>
            </div>
        </div>
    )
}
export default Card