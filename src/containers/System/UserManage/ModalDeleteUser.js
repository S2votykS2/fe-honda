import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDeleteUser extends Component {
  state = {
    modal: true,
  };

  componentDidMount() {}
  componentDidUpdate = (prevProps) => {};
  toggle = () => {
    // this.setState({
    //   modal: !this.state.modal,
    // });
    this.props.handleModalfromChild();
  };
  render() {
    let { userFromParent, isOpen } = this.props;
    return (
      <React.Fragment>
        <div>
          <Modal isOpen={isOpen} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}> Delete User </ModalHeader>{" "}
            <ModalBody>
              {" "}
              Do you want to delete {userFromParent.email} ?{" "}
            </ModalBody>{" "}
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Yes{" "}
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel{" "}
              </Button>{" "}
            </ModalFooter>{" "}
          </Modal>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteUser);
