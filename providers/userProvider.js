import React, {useState, useContext, createContext} from 'react';

export const User = createContext();

export default function UserProvider(props){
    const [userData, setUserData] = useState({
        name:"Shivam",
        phone:"+919955582384",
        village:"Selum",
        district: "Selum",
        state:"Tamil Nadu"
    });
    return (
        <User.Provider value={{userData, setUserData}}>
            {props.children}
        </User.Provider>
    )
}