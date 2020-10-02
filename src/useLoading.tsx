import { ReactElement } from 'react';

interface Props {
  loading?: boolean;
  indicator?: ReactElement;
}

export function useLoading({ loading = false, indicator }: Props) {
  const containerProps = {
    'aria-busy': loading,
    'aria-live': 'polite',
  };
  return {
    containerProps,
    Indicator: loading ? indicator : null,
  }
}