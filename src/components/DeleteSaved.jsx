import React, { Component } from "react";
import { SaveDeleteBtn } from "./anime/DetailsCard";
import { Delete, CheckCircle, XCircle } from "react-feather";

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
      <React.Fragment>
        {this.state.showDeleteBtn ? (
          <div className={svg ? "btn-container-column" : "btn-container-row"}>
            <CheckCircle
              className="btn-delete"
              onClick={() => removeItem(saved.map(x => x.id).indexOf(data.id))}
            />
            <XCircle
              className="btn-save"
              onClick={() => this.setState({ showDeleteBtn: false })}
            />
          </div>
        ) : (
          <div>
            {svg ? (
              <Delete
                className="btn-delete"
                onClick={() => this.setState({ showDeleteBtn: true })}
              />
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
      </React.Fragment>
    );
  }
}
