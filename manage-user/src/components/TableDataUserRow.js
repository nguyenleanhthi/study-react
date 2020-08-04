import React, { Component } from "react";

export default class TableDataUserRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusEdit: false,
      user: {
        ...this.props.user,
      },
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleEditUser = () => {
    this.setState({
      statusEdit: !this.state.statusEdit,
    });
  };

  cancelUpdate = () => {
    this.setState({
      statusEdit: !this.state.statusEdit,
    });
  };

  handleUpdateUser = () => {
    this.setState({
      statusEdit: !this.state.statusEdit,
    });
  };

  render() {
    const { stt, user } = this.props;
    return this.state.statusEdit === false ? (
      <tr>
        <td>{stt + 1}</td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.role}</td>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.handleEditUser}
              // onClick={() => this.props.onClickEditUser(user)}
            >
              <i className="fas fa-edit" />
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.props.onClickDeleteUser(user.id)}
            >
              <i className="fas fa-trash" />
              Delete
            </button>
          </div>
        </td>
      </tr>
    ) : (
      <tr>
        <td>{stt + 1}</td>
        <td>
          <input
            type="text"
            name="name"
            className="form-control"
            defaultValue={user.name}
            onChange={this.isChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="phone"
            className="form-control"
            defaultValue={user.phone}
            onChange={this.isChange}
          />
        </td>
        <td>
          <select
            className="form-control"
            name="role"
            defaultValue="1"
            onChange={this.isChange}
          >
            <option value="1">Admin</option>
            <option value="2">Moderator</option>
            <option value="3">User</option>
          </select>
        </td>
        <td>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                this.setState({
                  statusEdit: !this.state.statusEdit,
                });
                this.props.onClickEditUser(this.state.user);
              }}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.cancelUpdate}
            >
              Cancel
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
