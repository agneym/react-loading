import React, { ReactElement, ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useLoading, LoaderProvider } from '../src';

describe('useLoading', () => {
  test('renders element passed in', () => {
    let loading = false;
    const { result, rerender } = renderHook(() => useLoading({
      loading,
      indicator: <p>loader</p>
    }));

    expect(result.current.containerProps["aria-busy"]).toBe(false);
    expect(result.current.indicatorEl).toBeFalsy();

    loading = true; 
    rerender();

    expect(result.current.containerProps["aria-busy"]).toBe(true);

    render((result.current.indicatorEl) as ReactElement);
    expect(screen.getByText('loader')).toBeInTheDocument();
  });

  test('renders element from context if no element passed in', () => {
    const wrapper = ({ children }: { children: ReactNode }) => <LoaderProvider indicator={<span>context loader</span>}>{children}</LoaderProvider>;
    let indicator: ReactElement | undefined;

    const { result, rerender } = renderHook(() => useLoading({
      loading: true,
      indicator,
    }), { wrapper });

    const { unmount } = render((result.current.indicatorEl) as ReactElement);
    expect(screen.getByText('context loader')).toBeInTheDocument();
    unmount();

    indicator = <p>custom loader</p>;
    rerender();

    render((result.current.indicatorEl) as ReactElement);
    expect(screen.getByText('custom loader')).toBeInTheDocument();
  });
});
