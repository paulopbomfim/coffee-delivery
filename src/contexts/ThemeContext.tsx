import { ReactNode, createContext, useState } from "react";
import { storage } from "../StorageNames";

interface ThemeContextType {
  isDarkTheme: boolean,
  changeTheme: (isDark: boolean) => void,
}

export const ThemeContext = createContext({} as ThemeContextType);

interface ThemeContextProviderProps {
  children: ReactNode
}

export function ThemeContextProvider({children}: ThemeContextProviderProps) {
	const [isDarkTheme, setDarkTheme] = useState(false);

	function changeTheme(isDark: boolean) {
		setDarkTheme(isDark);
		const darkTheme = String(isDark);
		localStorage.setItem(storage.theme, darkTheme);
	}

	return (
		<ThemeContext.Provider value={{
			isDarkTheme,
			changeTheme
		}}>
			{children}
		</ThemeContext.Provider>
	);
}
