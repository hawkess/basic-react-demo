import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" placeholder="Enter a search term" onSubmit={this.onFormSubmit}>
		<div className="field">
          <label>Video Search</label>
          <input
            value={this.state.term}
            type="text"
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          ></input>
		  </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
