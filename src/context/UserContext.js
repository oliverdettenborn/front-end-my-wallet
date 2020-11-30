import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUser] = useLocalStorage('user', null);

  return (
    <UserContext.Provider {...props} value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}