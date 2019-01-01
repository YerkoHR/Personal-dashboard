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
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className="btn-delete"
              onClick={() => removeItem(saved.map(x => x.id).indexOf(data.id))}
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z" />
            </svg>
            <svg
              className="btn-save"
              onClick={() => this.setState({ showDeleteBtn: false })}
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z" />
            </svg>
          </div>
        ) : (
          <div>
            {svg ? (
              <svg
                className="btn-delete"
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
