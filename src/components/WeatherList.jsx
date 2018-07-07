import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Chart from './Chart';
import GoogleMap from './GoogleMap';

const grayBorder = '#DFE2E6';

class WeatherList extends Component {
  static propTypes = {
    weather: object.isRequired
  };

  state = {
    smallScreen: null
  };

  componentDidMount() {
    const checkScreenSize = () => {
      if (window.innerWidth <= 1200) {
        this.setState({ smallScreen: true });
      } else {
        this.setState({ smallScreen: false });
      }
    };

    window.addEventListener('resize', () => checkScreenSize());
    checkScreenSize();
  }

  cities = () => {
    const { smallScreen } = this.state;

    return this.props.weather.cities
      .map((cityData, index) => {
        const temps = cityData.list.map(list => list.main.temp - 219);
        const pressures = cityData.list.map(list => list.main.pressure);
        const humidities = cityData.list.map(list => list.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
          <tbody key={index}>
            <tr style={{ border: `1px solid ${grayBorder}` }}>
              {smallScreen && (
                <td>
                  <h4>City</h4>
                </td>
              )}
              <td>
                <GoogleMap lat={lat} lon={lon} />
              </td>
              {smallScreen && (
                <td>
                  <h4>Temp (°F)</h4>
                </td>
              )}
              <td>
                <Chart data={temps} color="red" convert={true} units="°F" />
              </td>
              {smallScreen && (
                <td>
                  <h4>Pressure (hPa)</h4>
                </td>
              )}
              <td>
                <Chart data={pressures} color="green" units="hPa" />
              </td>
              {smallScreen && (
                <td>
                  <h4>Humidity (%)</h4>
                </td>
              )}
              <td>
                <Chart data={humidities} color="blue" units="%" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="spacing" />
              </td>
            </tr>
          </tbody>
        );
      })
      .reverse();
  };

  render() {
    const { smallScreen } = this.state;

    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12">
            <StyledTable className="table">
              {smallScreen === false && (
                <thead className="thead-light">
                  <tr>
                    <th>City</th>
                    <th>Temp (°F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                  </tr>
                </thead>
              )}
              {this.cities()}
            </StyledTable>
          </div>
        </div>
      </div>
    );
  }
}

const StyledTable = styled.table`
  td,
  th {
    text-align: center;
  }

  svg {
    height: 150px;
  }

  @media (max-width: 1200px) {
    thead tr {
      display: flex;
      flex-direction: column;
    }

    td {
      display: flex;
      justify-content: center;
    }

    tbody tr {
      display: flex;
      flex-direction: column;
    }
  }
`;

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps)(WeatherList);
