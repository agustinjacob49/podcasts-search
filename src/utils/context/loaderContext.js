import { createContext, useState } from "react";

export const LoaderContext = createContext({ isLoading : true, setIsLoading: () => {} });

export const LoaderContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (<LoaderContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoaderContext.Provider>);
}