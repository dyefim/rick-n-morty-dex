import { useEffect, useState } from 'react';
import { getLocalState, saveToLocalState } from 'utils/localStorage';

const useLocalState = <T>(key: string, initialState: T) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fromLocalState = getLocalState(key);

    if (fromLocalState) {
      setState(fromLocalState);
    }
  }, [key]);

  useEffect(() => {
    saveToLocalState(key, state);
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalState;
