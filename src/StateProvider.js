import React, { createContext, useContext, useReducer } from 'react';

// prepare the data layer
export const StateContext = createContext();

// this will wrap around our app and provide the data layer to every component in out app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);


export default StateProvider;