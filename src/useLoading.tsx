import { cloneElement, ReactElement } from 'react';

import { useLoaderContext } from './LoaderContext';

interface Props {
  loading?: boolean;
  indicator?: ReactElement | null;
  loaderProps: {
    /** Description of progressbar and what it is loading */
    valueText?: string;
  }
}

type AriaLive = 'off' | 'assertive' | 'polite' | undefined;

/**
 * Hook returning Indicator element according to loading argument.
 * @example const { containerProps, indicatorEl } = useLoading({ loading: true })
 */
export function useLoading({ loading = false, indicator, loaderProps }: Props) {
  const containerProps = {
    'aria-busy': loading,
    'aria-live': 'polite' as AriaLive,
  };

  const accessibleLoaderProps = (() => {
    const { valueText, ...rest } = loaderProps;
    return {
      role: 'progressbar',
      'aria-valuetext': valueText,
      ...rest,
    }
  })();

  const loaderContext = useLoaderContext();
  const indicatorEl = indicator ?? loaderContext?.indicator;
  const accessibleIndicator = indicatorEl ? cloneElement(indicatorEl, accessibleLoaderProps) : null;

  return {
    containerProps,
    indicatorEl: loading ? accessibleIndicator : null,
  };
}
