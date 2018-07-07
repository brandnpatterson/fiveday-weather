import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions';

class SearchInput extends Component {
  static propTypes = {
    getWeather: func.isRequired
  };

  state = {
    text: ''
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text !== '') {
      this.props.getWeather(this.state.text);
      this.setState({ text: '' });
    } else {
      this.nameInput.focus();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form
              style={{ marginTop: '20px' }}
              onSubmit={this.onSubmit}
              className="input-group"
            >
              <input
                className="form-control"
                onChange={this.onChange}
                placeholder="Search for a City"
                ref={input => {
                  this.nameInput = input;
                }}
                type="text"
                value={this.state.text}
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
