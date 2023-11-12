import {createContext, ReactNode} from "react";
import {db, Cart} from "../localdb/db.ts";

interface CartContextType {
	handleAddItemToCart: (cartItem: Cart) => Promise<void>
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode
}
export function CartContextProvider({children}: CartContextProviderProps) {

	async function handleAddItemToCart(cartItem: Cart) {
		const existingCartItem = await db.carts.get(cartItem.itemId);
		if (existingCartItem) {
			await db.carts.update(cartItem.itemId, {quantity: existingCartItem.quantity + cartItem.quantity});
			return;
		}

		const id = await db.carts.add(cartItem);
		console.log(id);
	}

	return (
		<CartContext.Provider value={{
			handleAddItemToCart
		}}>
			{children}
		</CartContext.Provider>
	);
}
