import React, { Component } from "react";
import { connect } from "react-redux";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="social-media">
          <div className="grid-social">
            <div className="title-social"> Truyền thông nói về Honda </div>{" "}
            <div className="row-social">
              <div className="col-social">
                <iframe
                  width="570"
                  height="321"
                  src="https://www.youtube.com/embed/0PJsoJi9U9s?list=RD0PJsoJi9U9s"
                  title="[Vietsub] Hạ Sơn ( Giọng nữ ) - Khanh Quân | 下山 - 卿君"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                >
                  {" "}
                </iframe>{" "}
              </div>{" "}
              <div className="col-social">
                <a href="">
                  <div className="social1"> </div>{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="download">
          <div className="grid-download">
            <div className="row-download">
              <div className="col-download">
                <div className="img"> </div>{" "}
              </div>{" "}
              <div className="col-download">
                <div className="information">
                  <div className="header-info">
                    {" "}
                    Tải ứng dụng Honda clone with me{" "}
                  </div>{" "}
                  <ol className="list">
                    <li> Đặt hàng </li> <li> Nhận thông báo từ hệ thống </li>{" "}
                    <li> Nhận hướng dẫn sử dụng xe </li>{" "}
                  </ol>{" "}
                  <div className="link-app">
                    <span class="googleplay"> </span>{" "}
                    <span class="appstore"> </span>{" "}
                  </div>{" "}
                  <div className="link-auto">
                    <a href="">
                      {" "}
                      Hoặc mở liên kết <strong>
                        {" "}
                        honda.com.vn / app{" "}
                      </strong>{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="copyright">
          <div className="grid">
            <div className="left"> Honda & copy; </div>{" "}
            <div className="right">
              <i class="fab fa-facebook"> </i> <i class="fab fa-youtube"> </i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
