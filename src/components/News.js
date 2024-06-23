import React,{useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) =>{
const [articles,setArticles] = useState([]);
const [loading,setLoading] = useState(true);
const [page,setPage] = useState(1);
const [totalResults,setTotalResults] = useState(0);
// document.title = "News daily - " + (props.category).charAt(0).toUpperCase()+(props.category).slice(1);




const updateNews = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  }
  useEffect(() => {
  updateNews();
  }, [])
  

const  handleNextClick = async () => {
    // if(!(page+1> Math.ceil(totalResults/props.pageSize))){
    //   console.log("Next");
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${page+1}&pageSize=${props.pageSize}`;
    //setLoading(true);

    //   let data= await fetch(url);
    //   let parsedData=await data.json();
    //setArticles(parsedData.articles);
    //setLoading(false);
    // setTotalResults(parsedData.totalResults);

    // }
    setPage(page+1)
   updateNews();
  };
const  handlePrevClick = async () => {
    // console.log("Prev");
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${page-1}&pageSize=${props.pageSize}`;
    //setLoading(true);
    // let data= await fetch(url);
    // let parsedData=await data.json();
    //setArticles(parsedData.articles);
    //setLoading(false);
    //setTotalResults(parsedData.totalResults);
    setPage(page-1);
    updateNews();
  };
 const fetchMoreData = async()=>{
    setPage(page+1)
const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${page}&pageSize=${props.pageSize}`;
setLoading(true);
let data = await fetch(url);
let parsedData = await data.json();
console.log(parsedData);
setArticles(articles.concat(parsedData.articles));
setLoading(false);
setTotalResults(parsedData.totalResults);
  }


    return (
<>
<div className="container my-4">
<h1 className="text-center">News-daily - Top {props.category} Headlines</h1>
{/* {loading && <Spinner></Spinner>} */}
<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container">
<div className="row">
{/*!loading &&*/articles.map((element) => {return (
<div className="col-md-4" key={element.url}>
<Newsitem
author={element.author}
date={element.publishedAt}
title={element.title ? element.title.slice(0, 44) + "..." : ""} description={element.description? element.description.slice(0, 88) + "...": ""} source={element.source.name} imageUrl={element.urlToImage} newsUrl={element.url}>
</Newsitem>
</div>
);
})}
</div>
</div>
</InfiniteScroll>

</div>
{/* <div className="container d-flex justify-content-between mb-5">
<button
disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
&larr; Previous{" "}
</button>
<button
disabled={page + 1 > 
Math.ceil(totalResults / props.pageSize)} id="nxt" type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
</div> */}
</>
);

}

News.defaultProps={
  country:'in',
  pageSize:5,
  category:'science',
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News;
