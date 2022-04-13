import { createContext } from 'react';
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const data = [
        {
            Id: '1',
            name: 'Account 1',
            CreatedOn: '5-8-2021',
            UpdatedOn: '5-8-2021'
        },
        {
            Id: '2',
            name: 'Account 2',
            CreatedOn: '5-8-2021',
            UpdatedOn: '5-8-2021'
        },
        {
            Id: '3',
            name: 'Account 3',
            CreatedOn: '5-8-2021',
            UpdatedOn: '5-8-2021'
        },
    ]

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;