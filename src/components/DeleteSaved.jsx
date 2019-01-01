import React, { Component } from "react";
import { SaveDeleteBtn } from "./anime/DetailsCard";

export default class DeleteSaved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteBtn: false
    };
  }

  render() {
    const { removeItem, saved, data, svg } = this.props;

    return (
      <div>
        {this.state.showDeleteBtn ? (
          <div>
            Are you sure ?
            <SaveDeleteBtn
              className="btn-delete"
              onClick={() => removeItem(saved.map(x => x.id).indexOf(data.id))}
            >
              Yes
            </SaveDeleteBtn>
            <SaveDeleteBtn
              className="btn-save"
              onClick={() => this.setState({ showDeleteBtn: false })}
            >
              No
            </SaveDeleteBtn>
          </div>
        ) : (
          <div>
            {svg ? (
              <svg
                name="delete"
                onClick={() => this.setState({ showDeleteBtn: true })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="24"
                height="24"
              >
                <path d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0zm0 12H18V2H7.828l-5 5 5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414L14.414 7z" />
              </svg>
            ) : (
              <SaveDeleteBtn
                className="btn-delete"
                onClick={() => this.setState({ showDeleteBtn: true })}
              >
                Delete from your list
              </SaveDeleteBtn>
            )}
          </div>
        )}
      </div>
    );
  }
}
