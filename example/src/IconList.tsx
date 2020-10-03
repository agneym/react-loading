import * as React from 'react';

import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '../../.';

import SpinnerSection from './Spinner';

const spinners = [
  { indicator: Audio, width: 40 },
  { indicator: BallTriangle, width: 50 },
  { indicator: Bars, width: 40 },
  { indicator: Circles, width: 50 },
  { indicator: Grid, width: 40 },
  { indicator: Hearts, width: 80 },
  { indicator: Oval, width: 50 },
  { indicator: Puff, width: 50 },
  { indicator: Rings, width: 60 },
  { indicator: Audio, width: 50 },
  { indicator: TailSpin, width: 50 },
  { indicator: ThreeDots, width: 60 },
];

const IconList = () => {
  return (
    <ul>
      {spinners.map(({ indicator: Indicator, width }) => (
        <SpinnerSection indicator={<Indicator width={width} />} />
      ))}
    </ul>
  );
};

export default IconList;
