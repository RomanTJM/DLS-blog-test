import React, { useEffect, useState } from 'react';
import './HeaderMenu.css'

export const HeaderMenu = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`header_menu ${scrollPosition > 200 ? "hide" : ""}`}>
            <div className="header_menu-nav">
                <ul className="header_menu-list">
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
    )
}