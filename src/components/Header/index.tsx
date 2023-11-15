import {useContext, useEffect} from "react";

import { HeaderContainer, NavigationContainer } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

import appLogoLight from "../../assets/logo-light.svg";
import appLogoDark from "../../assets/logo-dark.svg";
import { Moon, ShoppingCart, SunDim } from "phosphor-react";
import GeographicLocation from "./components/GeographicLocation";
import { Link } from "react-router-dom";
import {CartContext} from "../../contexts/CartContext.tsx";

export function Header() {
	const {isDarkTheme, changeTheme} = useContext(ThemeContext);
	const {shoppingCartCounter, onLoadCartData} = useContext(CartContext);
	function handleChangeTheme() {
		changeTheme(!isDarkTheme ? "true": "false");
	}

	useEffect(() => {
		onLoadCartData().then();
	}, []);

	return (
		<HeaderContainer>
			<Link to="/">
				<img src={isDarkTheme ? appLogoDark : appLogoLight} alt="Coffee Delivery" />
			</Link>

			<NavigationContainer>
				<GeographicLocation />

				<Link to="/checkout" >
					<ShoppingCart size={22} weight="fill" />
					{shoppingCartCounter ? <span>{shoppingCartCounter}</span> : ""}
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
