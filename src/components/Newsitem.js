import React from 'react';

const Newsitem = (props) => {
    let {title, description, imageUrl, newsUrl, date, author, source} = props;
    return (
        <div className='news-item-card'>
            <div className="card">
                <span className="source-badge">{source}</span>
                <img src={imageUrl || "https://image.cnbcfm.com/api/v1/image/107399547-1712781262762-gettyimages-2148193067_sskypqgz.jpeg?v=1712781389&w=1920&h=1080"} 
                     className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-date">Published: {new Date(date).toGMTString()}</p>
                    <p className="card-author">Author: {author || 'Unknown'}</p>
                    <a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-primary read-more">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Newsitem;