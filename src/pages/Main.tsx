import React, { FC, useEffect } from "react";
import Card from "../components/Card/Card";
import './Main.css'
import {useDispatch, useSelector} from "react-redux";
import { getName, getPosts } from "../store/DataAction";
import { useNavigate } from "react-router-dom";
import { ISelectorState, MappedDataItem } from "../interface";

const Main: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state: ISelectorState) => state.dataSlice);

    useEffect(() => {
        getName(navigate)(dispatch)
        getPosts()(dispatch)
    }, []);
    
    return (
        <div className="main">
            <div className="main__wrapper">
                {data.map((item: MappedDataItem, index: number) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
export default Main