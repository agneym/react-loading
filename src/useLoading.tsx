import { ReactNode } from 'react';

interface Props {
  loading?: boolean;
  indicator: ReactNode;
}

export function useLoading({ loading = false, indicator }: Props) {
  const containerProps = {
    'aria-busy': loading,
    'aria-live': 'polite' as "off" | "assertive" | "polite" | undefined,
  };
  return {
    containerProps,
    indicatorEl: loading ? indicator : null,
  }
}