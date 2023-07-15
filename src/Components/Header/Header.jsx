import React from "react";
import './Header.css';
import Logotype from '../../Images/Logotype.png';
import { HeaderMenuMobie } from "../HeaderMenuMobie/HeaderMenuMobie";
import Search from '../../Icon/Search.svg'


export const Header = ({ onSearchHandler }) => {

    return (
        <div className="header">
            <HeaderMenuMobie />
            
            <div className="header-logo-conteiner">
                <img src={Logotype} alt='Logo' className="header-logo" />
            </div>


            <div className='mian-search'>

                <input
                    type="text"
                    onChange={(e) => onSearchHandler(e.target.value)}
                    className="input"
                    name="txt"
                />
                    <img src={Search} alt='Search' className='header-search' value="" />
            </div>
        </div>
    )
}