import { useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { GlobalStyle } from "./global";
import { storage } from "./StorageNames";

export function App() {
	const { isDarkTheme, changeTheme } = useContext(ThemeContext);
  
	const themePreference = localStorage.getItem(storage.theme);
	useEffect(() => {
		if (themePreference !== null) {
			changeTheme(themePreference);
		}
	}, [themePreference, changeTheme]);
	

	return (
		
		<ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>

	);
}
