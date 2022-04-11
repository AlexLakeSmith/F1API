import { createContext, useState } from "react";


export const DriverContext = createContext<any>(null);

const DriverContextProvider = () => {
    // this state will be shared with all components 

    const [message, setMessage] = useState();

return (
            // this is the provider providing state
    <DriverContext.Provider value={[message, setMessage]}>
    </DriverContext.Provider>
);
};

