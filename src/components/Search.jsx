import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <form className="searchForm" onSubmit={this.props.loadWeather}>
          <div className="row justify-content-md-center">
            <div className="col-sm">
              <input
                type="text"
                name="city"
                className="form-control my-4 waves-effect z-depth-0"
                placeholder="City"
              />
            </div>
            <div className="col-sm">
              <input
                type="text"
                name="country"
                className="form-control my-4 waves-effect z-depth-0"
                placeholder="Country"
              />
            </div>
            <div className="col-sm">
              <button
                className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 primary"
                type="submit"
              >
                Check
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Search;
