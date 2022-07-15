import React, {useState, useContext, createContext} from 'react';

export const User = createContext();

export default function UserProvider(props){
    const [userData, setUserData] = useState(null);
    return (
        <User.Provider value={{userData, setUserData}}>
            {props.children}
        </User.Provider>
    )
}