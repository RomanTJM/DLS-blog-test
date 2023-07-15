import React from "react";
import './Header.css';
import Logotype from '../../Images/Logotype.png';
import { HeaderMenuMobie } from "../HeaderMenuMobie/HeaderMenuMobie";
import { Search } from "../Search/Search";

export const Header = ({ onSearchHandler }) => {

    return (
        <div className="header">
            <div className="header-item">
                <HeaderMenuMobie />
                <div className="display-none col-3"></div>
                <div className="header-logo-conteiner col-3 col-50">
                    <img src={Logotype} alt='Logo' className="header-logo" />
                </div>
                <Search onSearchHandler={onSearchHandler} />
            </div>
        </div>
    )
}