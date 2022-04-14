
import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
import axios from 'axios';
export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [date, setDates] = useState([])
    useEffect(() => {
        axios
            .get('https://mockend.com/rawmediamarketing/vue-assignment-api/accounts')
            .then(
                (response) => (setDates(response.data))
            )
            .catch(e => console.log('info'))
    }, [])
    return (
        <UserContext.Provider value={date}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;