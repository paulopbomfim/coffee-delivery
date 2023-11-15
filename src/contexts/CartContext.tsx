import {createContext, ReactNode, useState} from "react";
import {db, Cart} from "../localdb/db.ts";

interface CartContextType {
	handleAddItemToCart: (cartItem: Cart) => Promise<void>
	onLoadCartData: () => Promise<void>
	shoppingCartCounter: number,
	shoppingCart: Cart[]
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode
}
export function CartContextProvider({children}: CartContextProviderProps) {
	const [shoppingCartCounter, setShoppingCartCounter] = useState(0);
	const [shoppingCart, setShoppingCart] = useState<Cart[]>([]);

	async function handleAddItemToCart(cartItem: Cart) {
		const existingCartItem = await db.carts.get(cartItem.itemId);
		if (existingCartItem) {
			await db.carts.update(cartItem.itemId, {quantity: existingCartItem.quantity + cartItem.quantity});
			return;
		}

		await db.carts.add(cartItem);
		setShoppingCartCounter(prevState => prevState + cartItem.quantity);
		setShoppingCart(prevState => [...prevState, cartItem]);
	}

	async function onLoadCartData() {
		const carts = await db.carts.toArray();
		const cartCounter = carts.map(cart => cart.quantity).reduce((prev, next) => prev + next, 0);
		setShoppingCartCounter(cartCounter);
		setShoppingCart(carts);
	}

	return (
		<CartContext.Provider value={{
			handleAddItemToCart,
			onLoadCartData,
			shoppingCartCounter,
			shoppingCart
		}}>
			{children}
		</CartContext.Provider>
	);
}
