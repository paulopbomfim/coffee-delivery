import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider, ThemeContext } from "./contexts/ThemeContext";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { Router } from "./Router";
import { storage } from "./StorageNames";

export function App() {
	const { isDarkTheme, changeTheme } = useContext(ThemeContext);
  
	const themePreference = localStorage.getItem(storage.theme);
	useEffect(() => {
		changeTheme(themePreference === "true");
	}, [changeTheme]);


	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<ThemeContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ThemeContextProvider>
		</ThemeProvider>
	);
}
