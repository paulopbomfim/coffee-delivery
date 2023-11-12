import Dexie, {Table} from "dexie";

export interface Cart {
	id?: number;
	itemId: number;
	quantity: number;
}

export class CartDataBase extends Dexie {
	carts!: Table<Cart>;

	constructor() {
		super("CoffeeDelivery-cart");
		this.version(1).stores({
			carts: "++id, itemId, quantity"
		});

	}
}

export const db = new CartDataBase();
