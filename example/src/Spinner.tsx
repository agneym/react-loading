import * as React from 'react';

import { useLoading } from '../../.';

const Spinner = ({ indicator }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator,
  });
  return (
    <li {...containerProps}>
      {indicatorEl}
    </li>
  );
}

export default Spinner;