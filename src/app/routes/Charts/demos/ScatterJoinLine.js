import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'ba-utils/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { data8, data9 } from './sampleData';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function ScatterJoinLine() {
  return (
    <ScatterChart
      width={800}
      height={450}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="x" type="number" name="stature" unit="cm" />
      <YAxis dataKey="y" type="number" name="weight" unit="kg" />
      <ZAxis range={[100]} />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="A school" data={data8} fillOpacity="0.8" fill={color.primary} line shape="cross" />
      <Scatter name="B school" data={data9} fillOpacity="0.8" fill={color.secondary} line shape="diamond" />
    </ScatterChart>
  );
}

export default ScatterJoinLine;
