// import React, { useEffect, useState } from 'react';
import React from 'react';
import { BlogCard } from '../BlogCard/BlogCard';
import './Main.css'
// import Search from '../../Icon/Search.svg'
// import { LoadBlog } from '../../Api/Api';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export const Main = ( {onSearchHandler, filtredBlogs} ) => {

    // const [blogs, setBlogs] = useState([])
    // const [filtredBlogs, setFiltredBlogs] = useState([])

    // useEffect(() => {
    //     const initBlog = async () => {
    //         const blog = await LoadBlog();

    //         setBlogs(blog);
    //         if (filtredBlogs.length === 0) {
    //             setFiltredBlogs(blog);
    //         }
    //     };

    //     initBlog();
    // }, [])

    // const onSearchHandler = (substr) => {
    //     const newBlog = blogs.filter(
    //         (blog) => blog.text.includes(substr) || blog.title.includes(substr)
    //     );
    //     setFiltredBlogs(newBlog);
    // };

    return (
        <div className='main'>
            <HeaderMenu />
            {/* <div className='mian-search'>
                <img src={Search} alt='Search' className='header-search'/>
                <input
                    type="text"
                    onChange={(e) => onSearchHandler(e.target.value)}
                    className="input"
                    name="txt"
                />
            </div> */}
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