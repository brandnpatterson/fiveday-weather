import React from 'react';
import { array, bool, string } from 'prop-types';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const propTypes = {
  color: string.isRequired,
  data: array.isRequired,
  convert: bool,
  units: string.isRequired
};

const Chart = props => {
  const average = data => {
    return _.round(_.sum(data) / data.length);
  };

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine color={props.color} />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};

Chart.propTypes = propTypes;

export default Chart;
