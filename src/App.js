import "./App.css";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  // state = {
  //   progress: 0
  // }
  // setprogress = (progress) =>{
  //   this.setState({progress: progress})
  // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          {/* <LoadingBar
            color="#f11946"
            progress={this.state.progress}
           
          /> */}
          <Routes>
            <Route exact path="/" element={<News key="general"  country="in"category="general" />  }/>
            <Route exact path="/business" element={<News key="business" country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News   key="entertainment" country="in" category="entertainment"/> }/>
            <Route exact path="/health" element={<News   key="health"country="in" category="health"/>}/>
            <Route exact path="/science" element={<News   key="science"country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News   key="sports"country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News   key="technology" country="in" category="technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
