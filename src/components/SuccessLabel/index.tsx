import React from 'react';
import { useContextState } from '../StateProvider';

export const SuccessLabel = () => {
  const [{ userName }] = useContextState();

  return <div>Hello {userName}</div>;
};
