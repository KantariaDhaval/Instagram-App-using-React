import { Component } from "react";

class Search extends Component {
  componentDidMount() {
    document.title = "Search - Instagram";
  }

  render() {
    return (
      <div id="profile">
        <div id="profileContainer">
          <h1>Search</h1>
        </div>
      </div>
    );
  }
}

export default Search;
