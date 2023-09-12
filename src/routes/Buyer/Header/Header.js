import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <ul className="prenav__list">
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Thăm dò ý kiến khách hàng{" "}
              </a>{" "}
            </li>{" "}
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Câu hỏi thường gặp{" "}
              </a>{" "}
            </li>{" "}
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Liên hệ{" "}
              </a>{" "}
            </li>{" "}
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Tuyển dụng{" "}
              </a>{" "}
            </li>{" "}
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Đăng nhập{" "}
              </a>{" "}
            </li>{" "}
            <li className="prenav__item">
              <a href="" className="prenav__link">
                Đăng ký{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
          <div className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Giới thiệu{" "}
                </a>{" "}
                <div className="subnav subnav--active">
                  <ul className="subnav__list">
                    <li className="subnav__item">
                      <a href="" className="subnav__link">
                        {" "}
                        Giới thiệu Honda Việt Nam{" "}
                      </a>{" "}
                    </li>{" "}
                    <li className="subnav__item extra">
                      {" "}
                      {/* Chỉ khi có extra thì mới thêm sub lần 2 */}{" "}
                      <a href="" className="subnav__link">
                        {" "}
                        Lịch sử phát triển{" "}
                      </a>{" "}
                      <ul className="extra__list extra__list--active">
                        <li className="extra__item">
                          {" "}
                          <a href="" className="extra__link">
                            {" "}
                            Triết lý honda{" "}
                          </a>{" "}
                        </li>{" "}
                        <li className="extra__item">
                          <a href="" className="extra__link">
                            {" "}
                            Tầm nhìn 2020{" "}
                          </a>{" "}
                        </li>{" "}
                      </ul>{" "}
                    </li>{" "}
                    <li className="subnav__item">
                      <a href="" className="subnav__link">
                        {" "}
                        Thư của tổng giám đốc{" "}
                      </a>{" "}
                    </li>{" "}
                    <li className="subnav__item">
                      <a href="" className="subnav__link">
                        {" "}
                        Triết lý Honda{" "}
                      </a>{" "}
                    </li>{" "}
                    <li className="subnav__item">
                      <a href="" className="subnav__link">
                        {" "}
                        Tầm nhìn 2030{" "}
                      </a>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Xe máy{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Ô tô{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  My Honda +
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Đóng góp xã hội{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Lái xe an toàn{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  MotorSport{" "}
                </a>{" "}
              </li>{" "}
              <li className="nav__item">
                <a href="" className="nav__link">
                  {" "}
                  Tin tức{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
