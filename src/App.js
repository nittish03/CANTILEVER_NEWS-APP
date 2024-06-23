import './App.css';
//c
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
  
}from "react-router-dom";

export default class App extends Component {
//js start
apiKey = "fb23cbe1cd074df997a342581989f4e6";


static defaultProps={
  country:'in',
  pageSize:5,
  category:'science',
}
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,

}
//js end
  render() {
    return (
      <>
          <BrowserRouter>
          <Navbar></Navbar>

  <Routes>
  <Route exact path='/home'   element={<News pageSize={5} apiKey={this.apiKey} key="general" country='in' category='general'></News>}></Route>
  <Route exact path='/technology'  element={<News pageSize={5} apiKey={this.apiKey} key="technology" country='in' category='technology'></News>}></Route>
  <Route exact path='/business'  element={<News pageSize={5} apiKey={this.apiKey}  key="business" country='in' category='business'></News>}></Route>
  <Route exact path='/entertainment'  element={<News pageSize={5} apiKey={this.apiKey} country='in' key="entertainment" category='entertainment'></News>}></Route>
  <Route exact path='/sports'  element={<News pageSize={5} apiKey={this.apiKey} country='in' key="sports" category='sports'></News>}></Route>
  <Route exact path='/science'  element={<News pageSize={5} apiKey={this.apiKey} country='in' key="science" category='science'></News>}></Route>
  <Route exact path='/health'  element={<News pageSize={5} apiKey={this.apiKey} key="health" country='in' category='health'></News>}></Route>
  </Routes>
        </BrowserRouter>
      </>
    )
  }
}
