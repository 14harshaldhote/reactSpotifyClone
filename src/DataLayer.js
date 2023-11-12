import React,{createContext, useContext, useReducer} from "react";

export const DataLayerContext=createContext();
export const Datalayer=({ initalState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initalState)}>
        {children}
    </DataLayerContext.Provider>
    
    );
    export const useStateValue = () => useContext(DataLayerContext);