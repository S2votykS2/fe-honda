import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./News.scss";
import { Fragment } from "react";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div className="news">
        <div className="grid">
          {" "}
          <div className="pre-carousel">
            <div className="content-left"> Tin tức nổi bật </div>{" "}
          </div>{" "}
          <div className="row-main">
            <div className="news-left item-news"> Chua update </div>{" "}
            <div className="news-right">
              <div className="row-sub">
                <div className="sub-news"> chua update </div>{" "}
                <div className="sub-news"> chua update </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
