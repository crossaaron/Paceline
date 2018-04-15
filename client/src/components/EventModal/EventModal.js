import React, { Component } from "react";

class EventModal extends Component {
  state = {
      show: false
  };

  handleModalToggle = () => {
      this.setState({ show: !this.state.show });
  }
  render() {
      console.log(this.state.show);

    return (
      <div
        className="modal fade show"
        style={{ display: this.state.show ? "block": "none"}}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={this.handleModalToggle}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button    "
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventModal;
