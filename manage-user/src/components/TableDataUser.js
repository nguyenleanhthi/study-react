import React, { Component } from "react";
import TableDataUserRow from "./TableDataUserRow";

export default class TableDataUser extends Component {
  render() {
    return (
      <div className="col-9">
        <table className="table table-striped table-hover table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataUser.map((user, key) => (
              <TableDataUserRow
                user={user}
                key={key}
                stt={key}
                onClickEditUser={this.props.onClickEditUser}
                onClickDeleteUser={this.props.onClickDeleteUser}
              ></TableDataUserRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
