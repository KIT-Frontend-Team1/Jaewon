import { RouterProvider } from "react-router-dom";
import GlobalStyles from "styles/global";
import router from "./routes/Routing";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import AddPostProvider from "store/store";

function App() {
	return (
		<AddPostProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</AddPostProvider>
	);
}

export default App;
