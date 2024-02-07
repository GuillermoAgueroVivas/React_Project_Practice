import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    // Here we are adding all of the logic of the application that our context is going to have.
    const [activeMenu, setActiveMenu] = useState
    (true);

    const [isClicked, setIsClicked] = useState(initialState)
    // This state is going to be used when checking for the size of the user's screen
    const [screenSize, setScreenSize] = useState(undefined)

    // Creating the way to handle the clicks from the NavBar.jsx. This will only change the value of the one that has been clicked to True.
    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }

    // Whatever values I pass through here will be passed through all of the components inside of the entire application.
    return (
        <StateContext.Provider 
            value={{
                activeMenu,
                setActiveMenu,
                isClicked, 
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize
            }}
        >
            {/*We always want to return 'children' insde of here which means that whatever is inside of the context will be displayed.*/}
            {children}
        </StateContext.Provider>
    )
}

// This is how to use the activeMenu. This is simply a function that returns the call of the used context but we pass in which context do we want to use. We are telling it to get the Data from the context (useStateContext) by using the context (useContext) and we specify which one (StateContext).
export const useStateContext = () => useContext
(StateContext);