import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import './Searchbar.css';
import Notiflix from 'notiflix';

class SearchBar extends Component {
  state = {
    request: '',
  };
  handlerInput = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };
  hendlerSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
      Notiflix.Notify.failure('Please enter your search term');
      return;
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.hendlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch style={{ marginRight: 8 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            onChange={this.handlerInput}
            value={this.state.request}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
