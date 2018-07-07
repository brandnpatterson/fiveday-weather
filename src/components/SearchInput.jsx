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
    error: null,
    text: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.weather.error) {
      this.setState({ error: nextProps.weather.error });
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value,
      error: null
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
                placeholder={
                  this.state.error ? this.state.error : 'Search for a City'
                }
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

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
