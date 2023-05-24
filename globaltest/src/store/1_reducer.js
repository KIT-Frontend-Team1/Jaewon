const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [...state, action.payload];
        case 'DELETE_INGREDIENT':
            return state.filter(ingredient => ingredient.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;
