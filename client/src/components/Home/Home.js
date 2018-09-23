import React from "react";
import HomeHeader from "./HomeHeader";
import Search from "../Search/Search";
import HomeArchieveTrx from "./HomeArchieveTrx";

export default () => {
  return (
    <div>
      <HomeHeader>
        <span className="primary-color">Ethereum Explorer</span>
        <br />
        <span className="secondary-color">
          View account balance.
          <br />
          View transactions.
        </span>
        <Search />
      </HomeHeader>
      <div className="secondary-background">
        <div className="container">
          <div className="col-md-10 mx-auto pt-8">
            <HomeArchieveTrx />
          </div>
        </div>
      </div>
    </div>
  );
};
