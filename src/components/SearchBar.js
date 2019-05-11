import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    // anytime there is a call back funtion use the arrow funtion.
    event.preventDefault();
    // with props we only communicate from parent down to child
    //to do the reverse we need a call back to the parent.
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              // here we created an event handler.
              //an event handler takes a form or input tag emits an event a callback funtion
              //is called
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
