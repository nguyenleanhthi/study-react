import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: "",
    };
  }

  handleTextSearchIsChange = (event) => {
    this.props.handleSearch(event.target.value);
  };

  render() {
    return (
      <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleTextSearchIsChange}
              style={{ width: 300 }}
              placeholder="Enter name search..."
            />
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Search;
