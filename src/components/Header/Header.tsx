import React, {FC} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/Logo";
import { LogOut } from "../../assets/img/LogOut";
import { ISelectorState } from "../../interface";
import { getName } from "../../store/DataAction";
import './Header.css';

export const Header: FC = () => {
    const { name } = useSelector((state: ISelectorState) => state.dataSlice)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (name && name.length) {
            localStorage.removeItem('name')
            getName('')(dispatch)
            navigate('/login');
        }
    }

    return (
        <header className="header">
            <Logo />
            <div className="header__wrapper">
                <span>
                    {name}
                </span>
                <LogOut click={handleLogout} />
            </div>
        </header>
    )
}