import React from 'react';
import { BlogCard } from '../BlogCard/BlogCard';
import './Main.css'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export const Main = ({ filtredBlogs }) => {

    return (
        <div className='main'>
            <HeaderMenu />
            <div className='main-blogs'>
                {
                    filtredBlogs.map((item) => (
                        <BlogCard
                            key={item.title + item.date}
                            title={item.title}
                            tags={item.tags}
                            autor={item.autor}
                            date={item.date}
                            views={item.views}
                            text={item.text}
                            img={item.img}
                            img_2x={item.img_2x}
                        />
                    )
                    )
                }
            </div>
        </div>
    )
}