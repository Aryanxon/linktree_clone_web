import { createContext, useState } from "react";

export const CounterContext = createContext({});

export const CounterProvider = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <CounterContext.Provider value={{setName, setEmail, setPassword, name, email, password}}>
            {props.children}
        </CounterContext.Provider>
    );
};