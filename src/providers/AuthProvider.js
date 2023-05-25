import { useState, createContext } from "react";
import { fakeAuthProvider } from "../auth";
import { profiles as globalProfiles } from "../utils/config";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([...globalProfiles]);

  const signin = (newUser, callback) => {
    const profileExists = profiles.find(
      (profile) => profile.email == newUser.email
    );

    if (!profileExists) {
      return;
    }

    return fakeAuthProvider.signin(() => {
      setUser(profileExists);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const register = (values, callback) => {
    const lastElement = profiles[profiles.length - 1];

    setProfiles((prev) => [
      ...prev,
      { ...values, ...{ id: lastElement.id + 1 } },
    ]);
    callback();
  };

  console.log(profiles);

  const value = { user, signin, signout, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
