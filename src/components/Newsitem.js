import React from 'react'
const Newsitem = (props) => {
    let {title,description,imageUrl,newsUrl,date,author,source} = props;
    return (
      <>
<div className=' my-3'>
<div className="card" >
<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"85%"}}>{source }</span>
<img src={imageUrl?imageUrl:"https://image.cnbcfm.com/api/v1/image/107399547-1712781262762-gettyimages-2148193067-eid402813_sskypqgz.jpeg?v=1712781389&w=1920&h=1080"} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{title}</h5>
<p className="card-text">{description}</p>
<p >Dated : {new Date(date).toGMTString()} </p>
<p > Author : {author?author:'unknown'} </p>
<a href={newsUrl} rel='noreferrer' target='_blank' className="btn btn-sm btn-dark">Read more</a>
</div>
</div>
      </div>
      </>
    )
}

export default Newsitem