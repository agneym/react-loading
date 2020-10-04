import React, { createContext, ReactElement, ReactNode, useContext, useMemo } from 'react';

interface ContextProps {
  indicator: ReactElement | null;
}

interface ProviderProps extends ContextProps {
  children: ReactNode;
}

const defaultValue = {
  indicator: null,
};

const LoaderContext = createContext<ContextProps>(defaultValue);
export const useLoaderContext = () => useContext(LoaderContext);

export const LoaderProvider = ({ indicator, children }: ProviderProps) => {
  const value = useMemo(
    () => ({
      indicator: indicator,
    }),
    [indicator]
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
