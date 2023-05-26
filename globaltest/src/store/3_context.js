import { createContext, useContext, useReducer } from 'react';

const initialState = [{ id: 1, name: '홍길동', nickname: '히히' }];

const UserStore = createContext();
export const useUSerStore = () => useContext(UserStore);

const userReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const newUser = {
                id: Math.floor(Math.random() * 1000),
                name: action.name,
                nickname: action.nickname,
            };
            return [...state, newUser];

        case 'ADD_ISEDIT':
            const updatedState = state.map(user => {
                return { ...user, isEdit: true };
            });
            console.log(updatedState);
            return updatedState;

        case 'ADD_RESET':
            return (state = []);

        case 'FILTER_USER':
            const filteringUser = state.filter(user => user.isEdit === true);
            console.log(filteringUser);

            return filteringUser;

        default:
            return state;
    }
};

const UserStoreProvider = ({ children }) => {
    const [userList, dispatch] = useReducer(userReducer, initialState);

    return <UserStore.Provider value={{ userList, dispatch }}>{children}</UserStore.Provider>;
};

export default UserStoreProvider;
