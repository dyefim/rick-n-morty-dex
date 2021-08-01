import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useNavigation = (defaultPath = '/') => {
  const history = useHistory();
  const location = useLocation();

  const changeLocation = (path = '/') => {
    history.push(path);
  };

  const [value, setValue] = useState(() => location.pathname || defaultPath);

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
    changeLocation(newValue);
  };

  return [value, handleChange] as const;
};

export default useNavigation;
