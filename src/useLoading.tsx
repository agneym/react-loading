import { ReactNode } from 'react';

import { useLoaderContext } from './LoaderContext';

interface Props {
  loading?: boolean;
  indicator?: ReactNode;
}

/**
 * Hook returning Indicator element according to loading argument.
 * @example const { containerProps, indicatorEl } = useLoading({ loading: true })
 */
export function useLoading({ loading = false, indicator }: Props) {
  const containerProps = {
    'aria-busy': loading,
    'aria-live': 'polite' as "off" | "assertive" | "polite" | undefined,
  };

  const loaderContext = useLoaderContext();
  const indicatorEl = indicator ?? loaderContext?.indicator;
  console.log(loaderContext)

  return {
    containerProps,
    indicatorEl: loading ? indicatorEl : null,
  }
}