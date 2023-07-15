import React, { useState } from 'react';
import './BlogCard.css'
import Close from '../../Icon/Close.svg'

export const BlogCard = ({ img, title, tags, autor, date, views, text, img_2x }) => {

    const [isOpenModal, setOpenModal] = useState(false)

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div className='blog_card'>
            {isOpenModal ? (
                <>
                    <div className='modal'>
                        <div className='modal-item' onClick={e => e.stopPropagation()}>
                            <div className='modal_close'>
                                <img src={Close} alt='Close' onClick={() => closeModal()} />
                            </div>
                            <div>
                                <h1>{title}</h1>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                </>

            ) : (
                null
            )
            }
            <img 
                 onClick={() => setOpenModal(!isOpenModal)}
                src={img} srcSet={`${img} 1x, ${img_2x} 2x`} 
            />
            <h2>{tags}</h2>
            <h1>{title}</h1>
            <div className='blog_card-flex'>
                <span className='blog_card-name'>{autor}</span>
                <span className='blog_card-data'>{date}</span>
                <span className='blog_card-views'>{views}</span>
            </div>
            <p>{text}</p>
        </div>
    );
};