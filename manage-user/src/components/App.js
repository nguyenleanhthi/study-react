import React, { Component } from "react";
import "./../App.css";

import { v4 as uuidv4 } from "uuid";

import Header from "./Header";
import Search from "./Search";
import TableDataUser from "./TableDataUser";
import FromAddUser from "./FromAddUser";
import DataUser from "./../back-end/data.json";

class App extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem("dataUser")) {
      localStorage.setItem("dataUser", JSON.stringify(DataUser));
    }
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    this.state = {
      dataUser,
      textSearch: "",
    };
  }

  handleSearch = (textSearch) => {
    this.setState({
      textSearch: textSearch,
    });
  };

  handleAddUser = (name, phone, role) => {
    const user = {
      id: uuidv4(),
      name,
      phone,
      role,
    };
    this.setState({
      dataUser: [...this.state.dataUser, user],
    });
  };

  handleEditUser = (user) => {
    this.setState({
      dataUser: this.state.dataUser.map((item) => {
        return item.id + "" === user.id + "" ? user : item;
      }),
    });
  };

  handleDeleteUser = (idUser) => {
    this.setState({
      dataUser: this.state.dataUser.filter((item) => {
        return item.id + "" !== idUser + "";
      }),
    });
  };

  componentDidUpdate() {
    localStorage.setItem("dataUser", JSON.stringify(this.state.dataUser));
  }

  render() {
    const dataUser = [];
    this.state.dataUser.map((user) => {
      if (
        user.name.toLowerCase().indexOf(this.state.textSearch.toLowerCase()) !==
        -1
      ) {
        dataUser.push(user);
      }
      return user;
    });
    return (
      <div>
        <Header></Header>
        <div className="search-form">
          <div className="container">
            <div className="row">
              <Search handleSearch={this.handleSearch}></Search>
              <TableDataUser
                onClickEditUser={this.handleEditUser}
                onClickDeleteUser={this.handleDeleteUser}
                dataUser={dataUser}
              ></TableDataUser>
              <FromAddUser onClickAddUser={this.handleAddUser}></FromAddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
