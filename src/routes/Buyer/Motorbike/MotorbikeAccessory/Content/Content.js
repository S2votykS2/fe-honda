import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Content.scss";
import { Fragment } from "react";
import * as actions from "../../../../../store/actions";
import { CommonUtils } from "../../../../../utils";
import { withRouter } from "react-router";
import * as action from "../../../../../store/actions";
import { getAccessoryMotorbikes } from "../../../../../services/motorbikeService";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: [],
      accessoriesNotItem: [],
      accessoryItem: [],
      isOpen: false,
    };
  }

  async componentDidMount() {
    // await this.props.fetchGetAccessoryMotorbike("ALL");
    let res = await getAccessoryMotorbikes("ALL");
    if (res.data && res.data.code === 0) {
      this.setState({
        accessories: res.data.data,
      });
    }

    // await this.props.fetchGetAccessoryMotorbike("ALL_SPECIFIC");
    let res2 = await getAccessoryMotorbikes("ALL_SPECIFIC");
    if (res2.data && res2.data.code === 0) {
      this.setState({
        accessoriesNotItem: res2.data.data,
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevProps.accessories !== this.props.accessories) {
      console.log("true");
      this.setState({
        accessories: this.props.accessories,
      });
    }
  }
  handleClickItem = (item) => {
    let totals = this.state.accessories;
    let id = item.id;
    let accessoryItem = totals.filter((item, index) => {
      return item.itemData.itemId === id;
    });
    this.setState({
      accessoryItem: accessoryItem,
      isOpen: true,
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    let { accessories, accessoriesNotItem, accessoryItem } = this.state;
    console.log("check state", this.state);
    return (
      <>
        <div
          className="slider"
          style={{
            backgroundImage:
              "url(https://cdn.honda.com.vn/spare-parts-banner/December2019/ujSyhlLFACYuJhKn2wDb.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "centre",
            height: "700px",
            borderBottom: "3px solid #cc0000",
          }}
        ></div>{" "}
        <div className="content-acc">
          <div className="grid">
            <div className="link-router"> Chưa Update </div>{" "}
            <ul className="option-acc">
              <li className="item-acc"> </li>{" "}
            </ul>{" "}
            <div className="intro-acc">
              Các sản phẩm dầu nhờn động cơ và hóa chất phụ trợ chính hiệu Honda
              được nghiên cứu và phát triển chuyên biệt cho xe máy Honda, giúp
              bảo vệ và tối ưu hóa khả năng vận hành của xe Honda.Lựa chọn dầu
              nhờn và hóa chất chính hiệu Honda để bảo vệ xe Honda của bạn.Kiến
              thức dầu nhớt{" "}
            </div>{" "}
            <div className="component-acc">
              <div className="name-acc"> Dầu nhớt </div>{" "}
              <div className="row-acc">
                {" "}
                {accessoriesNotItem &&
                  accessoriesNotItem.length > 0 &&
                  accessoriesNotItem.map((item, index) => {
                    return (
                      <div
                        className="col-acc"
                        onClick={() => this.handleClickItem(item)}
                      >
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                              item.image
                            )})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            backgroundPosition: "centre",
                          }}
                        ></div>{" "}
                        <div className="name"> {item.name} </div>{" "}
                        <div className="price">
                          Từ {item.price}
                          VNĐ{" "}
                        </div>{" "}
                      </div>
                    );
                  })}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} size="lg">
          {" "}
          <ModalHeader toggle={this.toggle}> TEST </ModalHeader>{" "}
          <ModalBody>
            <div className="grid-item">
              <div className="content-item">
                <div className="content-left">
                  <div
                    className="item-img"
                    style={{
                      backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                        accessoryItem[0] ? accessoryItem[0].image : ""
                      )})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "centre",
                      height: "200px",
                    }}
                  ></div>{" "}
                  <div className="item-carousel"> chua update </div>{" "}
                </div>{" "}
                <div className="content-right">
                  <div className="item-name">
                    {" "}
                    {accessoryItem[0] ? accessoryItem[0].name : ""}{" "}
                  </div>{" "}
                  <div className="item-description">
                    {" "}
                    {accessoryItem[0] ? accessoryItem[0].description : ""}{" "}
                  </div>{" "}
                  <div className="item-price">
                    Giá từ {accessoryItem[0] ? accessoryItem[0].price : ""}
                    VND{" "}
                  </div>{" "}
                  <table>
                    <thead className="row-table active">
                      <th className="col-table1"> Loại xe </th>{" "}
                      <th className="col-table2"> Giá bán lẻ </th>{" "}
                    </thead>{" "}
                    <tbody className="">
                      {" "}
                      {accessoryItem &&
                        accessoryItem.length > 0 &&
                        accessoryItem.map((item, index) => {
                          return (
                            <tr className="row-table">
                              <td className="col-table1">
                                {" "}
                                {item.itemData.type}{" "}
                              </td>{" "}
                              <td className="col-table2">
                                {" "}
                                {item.itemData.price}{" "}
                              </td>{" "}
                            </tr>
                          );
                        })}{" "}
                    </tbody>{" "}
                  </table>{" "}
                </div>{" "}
              </div>{" "}
              <div className="item-relate">
                <div className="row-modal">
                  {" "}
                  {accessoriesNotItem &&
                    accessoriesNotItem.length > 0 &&
                    accessoriesNotItem.map((item, index) => {
                      let ss =
                        accessoryItem && accessoryItem.length > 0
                          ? accessoryItem[0].id
                          : -1;
                      if (index < 4 && item.id !== ss) {
                        return (
                          <div
                            className="col-modal"
                            onClick={() => this.handleClickItem(item)}
                          >
                            <div
                              className="img-modal"
                              style={{
                                backgroundImage: `url(${CommonUtils.toBase64FromBuffer(
                                  item.image
                                )})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "centre",
                              }}
                            ></div>{" "}
                            <div className="name-modal"> {item.name} </div>{" "}
                          </div>
                        );
                      }
                    })}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </ModalBody>{" "}
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Đặt hàng{" "}
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Hủy{" "}
            </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Content)
);
