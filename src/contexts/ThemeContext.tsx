import {createContext, ReactNode, useState} from "react";
import {storage} from "../StorageNames";

// import { storage } from "../StorageNames";

interface ThemeContextType {
  isDarkTheme: boolean,
  changeTheme: (isDark: string) => void,
}

export const ThemeContext = createContext({} as ThemeContextType);


interface ThemeContextProviderProps {
  children: ReactNode
}
export function ThemeContextProvider({children}: ThemeContextProviderProps) {
	const [isDarkTheme, setDarkTheme] = useState(false);

	function changeTheme(isDark: string) {
		setDarkTheme(isDark === "true");

		localStorage.setItem(storage.theme, isDark.toString());
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
