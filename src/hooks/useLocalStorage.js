import { useState } from 'react';

export default function useLocalStorage(key, data) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : data;
    } catch {
      return data;
    }
  });

  const setValueAtLocalStorage = (value) => {
    try {
      setState(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  return [state, setValueAtLocalStorage];
}