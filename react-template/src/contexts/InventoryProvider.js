import React, { useContext } from "react";
import { useState, useEffect} from "react";

export const InventoryContext = React.createContext({});

export const useInventoryContext = () => useContext(InventoryContext);


const InventoryProvider = (props) => {
    const [qValues, setQValues] = useState([]);


    useEffect(() => {
        console.log('qValues', qValues)
    }, [qValues]);

    return (
        <InventoryContext.Provider value={{qValues: qValues, setQValues: setQValues}}>
            {props.children}
        </InventoryContext.Provider>
    );
};

export default InventoryProvider;
