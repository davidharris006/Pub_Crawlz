import React, { Component } from "react";
import MainButton from "../components/MainButtons";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron mainbox text-primary ">
          <h1>PUBCRAWL!!</h1>
          <p>Welcome to PubCrawl where we have over 2,400 beers on tap for you to search.
          <br />We have information on the breweries and the beer that you know and love from all around the United States!</p>
        </div>
        <div className="contianer-fluid">
          <div className="row">

            <div className="col-md-2"></div>
            <div className="col-md-4">
            <MainButton buttontext="Find your Beer!" />
            </div>
            <div className="col-md-4">
            <MainButton buttontext="See all our beers" />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
