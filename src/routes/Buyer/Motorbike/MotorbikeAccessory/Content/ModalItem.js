import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Fragment } from "react";
import { CommonUtils } from "../../../../../utils";
import { withRouter } from "react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: [],
      accessoriesNotItem: [],
      accessoryItem: [],
      isOpen: false,
    };
  }

  async componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapShot) {}

  render() {
    return (
      <>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} size="lg">
          {" "}
          {/* <ModalHeader toggle={this.toggle}> Delete User </ModalHeader>{" "} */}{" "}
          <ModalBody> </ModalBody>{" "}
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Yes{" "}
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel{" "}
            </Button>{" "}
          </ModalFooter>{" "}
        </Modal>{" "}
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalItem)
);
