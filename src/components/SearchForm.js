import React from 'react';

class SearchForm extends React.Component {

  state = { term: 'Type your search here...' };

  onFormSubmit = (e) => {
    e.preventDefault();

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
              onChange={e => this.setState({ term: e.target.value })}
              onClick={() => this.setState({ term: '' })}
            />
          </div>
        </form>
      </div>
    )
  }
};

export default SearchForm;