import React, { Component } from "react";

export default class FromAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusShowForm: true,
      id: "",
      name: "",
      phone: "",
      role: 1,
    };
  }

  changeStatus = () => {
    this.setState({
      statusShowForm: !this.state.statusShowForm,
    });
  };

  showButton = () => {
    if (this.state.statusShowForm === false) {
      return (
        <button
          className="btn btn-block btn-outline-info"
          onClick={this.changeStatus}
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-block btn-outline-secondary"
          onClick={this.changeStatus}
        >
          Close
        </button>
      );
    }
  };

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="col-3">
        {this.showButton()}
        {this.state.statusShowForm === true && (
          <div className="card border-primary mt-2 mb-2">
            <div className="card-header">Add user</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={this.isChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    onChange={this.isChange}
                  />
                </div>
                <div className="form-group">
                  <label>Choose role</label>
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
                </div>
                <div className="form-group">
                  <button
                    type="reset"
                    className="btn btn-primary btn-block mt-3"
                    onClick={() =>
                      this.props.onClickAddUser(
                        this.state.name,
                        this.state.phone,
                        this.state.role
                      )
                    }
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
