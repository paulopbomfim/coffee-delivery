import {useContext} from "react";

import { HeaderContainer, NavigationContainer } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

import appLogoLight from "../../assets/logo-light.svg";
import appLogoDark from "../../assets/logo-dark.svg";
import { Moon, ShoppingCart, SunDim } from "phosphor-react";
import GeographicLocation from "./components/GeographicLocation";
import { Link } from "react-router-dom";

export function Header() {
	const {isDarkTheme, changeTheme} = useContext(ThemeContext);

	function handleChangeTheme() {
		changeTheme(!isDarkTheme ? "true": "false");
	}

	return (
		<HeaderContainer>
			<Link to="/">
				<img src={isDarkTheme ? appLogoDark : appLogoLight} alt="Coffee Delivery" />
			</Link>

			<NavigationContainer>
				<GeographicLocation />

				<Link to="/checkout" >
					<ShoppingCart size={22} weight="fill" />
					<span>3</span>
				</Link>

				<button type="button" className={isDarkTheme ? "dark" : ""} onClick={handleChangeTheme}>
					{
						isDarkTheme
							? (<Moon size={22} weight="fill" />)
							: (<SunDim size={22} weight="fill" />)
					}
				</button>
			</NavigationContainer>
			
		</HeaderContainer>
	);
}
