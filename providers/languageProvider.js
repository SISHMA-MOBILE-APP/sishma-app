import React, { createContext, useContext, useState } from "react";

export const Language = createContext();
export default function LanguageProvider(props){
    const [language, setLanguage] = useState("hindi");
    return(
        <Language.Provider value={{language, setLanguage}}>
            {props.children}
        </Language.Provider>
    );
}