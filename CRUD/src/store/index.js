const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_POST":
			return [action.payload, ...state];
		default:
			return state;
	}
};

export default reducer;
