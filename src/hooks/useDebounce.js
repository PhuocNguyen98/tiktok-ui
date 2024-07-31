import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeId);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
