import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  constructor(props) {
    super(props);
    console.log("i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
    document.title = "News daily - " + (this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1);
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  }
  async componentDidMount() {
    // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading:true
    // })
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles:parsedData.articles,
    //   loading:false,
    //   totalResults:parsedData.totalResults,
    // });
    this.updateNews();
  }
  handleNextClick = async () => {
    // if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   console.log("Next");
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading:true,
    //   })
    //   let data= await fetch(url);
    //   let parsedData=await data.json();
    //   this.setState({
    //     articles:parsedData.articles,
    //     page:this.state.page+1,
    //     loading:false,
    //     totalResults:parsedData.totalResults,

    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    // console.log("Prev");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading:true
    // })
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // this.setState({articles:parsedData.articles,
    //   page:this.state.page-1,
    //   loading:false,
    //   totalResults:parsedData.totalResults,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  fetchMoreData = async()=>{
this.setState({page:this.state.page+1,})
const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fb23cbe1cd074df997a342581989f4e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
this.setState({
  loading: true,
});
let data = await fetch(url);
let parsedData = await data.json();
console.log(parsedData);
this.setState({
  articles: this.state.articles.concat(parsedData.articles),
  loading: false,
  totalResults: parsedData.totalResults,
});

  }


  render() {
    return (
<>
<div className="container my-4">
<h1 className="text-center">News-daily - Top {this.props.category} Headlines</h1>
{/* {this.state.loading && <Spinner></Spinner>} */}
<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner></Spinner>}
        >
          <div className="container">
<div className="row">
{/*!this.state.loading &&*/this.state.articles.map((element) => {return (
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
disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
&larr; Previous{" "}
</button>
<button
disabled={this.state.page + 1 > 
Math.ceil(this.state.totalResults / this.props.pageSize)} id="nxt" type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div> */}
</>
);
}
}
export default News;
