import React from 'react';

class SearchBar extends React.Component {

  state = {term: '' };
  // constructor() {
  //   this.onFormSubmit = this.onFormSubmit.bind(this)
  // }

  // onIinputChange(event) {
  //   console.log(event.target.value)
  // }

  // onInputClick() {
  //   console.log('Input was clicked')
  // }
  onFormSubmit = (event) => {
    event.preventDefault();
    // prevent default behavior like refreshing page

    // console.log(this.state.term);

    this.props.onSubmit(this.state.term);

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* this in "onFormSubmit" is undefined
          It should have been called like somevalue.this.onFormSubmit */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              // argument is input instead of ()
              // onClick={this.onInputClick}
            />
            {/*  */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;