import React, { useState } from "react";
import Close from '../../Icon/Close.svg';
import './HeaderMenuMobie.css';
import Logotype from '../../Images/Logotype.png';

export const HeaderMenuMobie = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div className="header_menu-mobie" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
                <>
                    <div className='menu-mobie'>
                        <div className='menu-item' onClick={e => e.stopPropagation()}>
                            <div className='menu-close'>
                                <img src={Logotype} alt='Logo' className="menu-logo" />
                                <img src={Close} alt='Close' className="menu-close-img" onClick={() => closeMenu()} />
                            </div>
                            <div className="header_menu-nav">
                                <ul className="header_menu-list-mobile">
                                    <li>
                                        <a href="#" className="header_menu-link">Demos</a>
                                        <ul className="header_menu-sub-list">
                                            <li>
                                                <a href="#">Post Header</a>
                                            </li>
                                            <li>
                                                <a href="#">Post Layout</a>
                                            </li>
                                            <li>
                                                <a href="#">Share Buttons</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Video Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="header_menu-link">Post</a>
                                        <ul className="header_menu-sub-list">
                                            <li>
                                                <a href="#">Post Header</a>
                                            </li>
                                            <li>
                                                <a href="#">Post Layout</a>
                                            </li>
                                            <li>
                                                <a href="#">Share Buttons</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Video Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="header_menu-link">Features</a>
                                        <ul className="header_menu-sub-list">
                                            <li>
                                                <a href="#">Post Header</a>
                                            </li>
                                            <li>
                                                <a href="#">Post Layout</a>
                                            </li>
                                            <li>
                                                <a href="#">Share Buttons</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Video Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="header_menu-link">Categories</a>
                                        <ul className="header_menu-sub-list">
                                            <li>
                                                <a href="#">Post Header</a>
                                            </li>
                                            <li>
                                                <a href="#">Post Layout</a>
                                            </li>
                                            <li>
                                                <a href="#">Share Buttons</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Video Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="header_menu-link">Shop</a>
                                        <ul className="header_menu-sub-list">
                                            <li>
                                                <a href="#">Post Header</a>
                                            </li>
                                            <li>
                                                <a href="#">Post Layout</a>
                                            </li>
                                            <li>
                                                <a href="#">Share Buttons</a>
                                            </li>
                                            <li>
                                                <a href="#">Gallery Post</a>
                                            </li>
                                            <li>
                                                <a href="#">Video Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="header_menu-link-buy">Buy Now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                null
            )
            }
        </div>
    )
}