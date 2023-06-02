import { createContext, useContext, useReducer } from "react";
import reducer from "store";
import mockCatsData from "data/catsMock";

export const PostStore = createContext();
export const usePostStore = () => useContext(PostStore);

const initialState = mockCatsData;

const AddPostProvider = ({ children }) => {
	const [post, dispatch] = useReducer(reducer, initialState);

	return (
		<PostStore.Provider value={{ post, dispatch }}>
			{children}
		</PostStore.Provider>
	);
};
export default AddPostProvider;
