
import {useState, createContext} from 'react';
import { fakeAuthProvider } from '../auth';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const signin = (newUser, callback) => {
      return fakeAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    const signout = (callback) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    const value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }