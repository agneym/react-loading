import { cloneElement, ReactElement, isValidElement } from 'react';
import invariant from 'tiny-invariant';

import { useLoaderContext } from './LoaderContext';

interface Props {
  loading?: boolean;
  indicator?: ReactElement | null;
  loaderProps?: {
    /** Description of progressbar and what it is loading */
    valueText?: string;
  }
}

type AriaLive = 'off' | 'assertive' | 'polite' | undefined;

/**
 * Hook returning Indicator element according to loading argument.
 * @example const { containerProps, indicatorEl } = useLoading({ loading: true })
 */
export function useLoading({ loading = false, indicator, loaderProps = {} }: Props) {
  const containerProps = {
    'aria-busy': loading,
    'aria-live': 'polite' as AriaLive,
  };

  const loaderContext = useLoaderContext();
  const indicatorEl = indicator ?? loaderContext?.indicator;
  invariant(isValidElement(indicatorEl), 'Expected a valid React element as indicator');

  const accessibleLoaderProps = (() => {
    const { valueText, ...rest } = loaderProps;
    return {
      role: 'progressbar',
      'aria-valuetext': valueText,
      ...rest,
    }
  })();
  const accessibleIndicator = indicatorEl ? cloneElement(indicatorEl, accessibleLoaderProps) : null;

  return {
    containerProps,
    indicatorEl: loading ? accessibleIndicator : null,
  };
}
