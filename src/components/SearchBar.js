import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  // controlState = e => this.setState({term: e.target.value})


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Summoner Name Search</label>
            <input
              type="text"
              placeholder="Search here"
              value={this.state.term}
              // onChange={this.controlState}
              onChange={e => this.setState({ term: e.target.value })}
            >
            </input>
          </div>

        </form>
      </div>
    )
  }
}

export default SearchBar