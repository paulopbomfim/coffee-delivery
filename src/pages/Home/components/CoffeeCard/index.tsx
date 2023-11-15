import { CoffeeDataType } from "../..";
import {
	CardContainer, CartContainer,
	CategoriesSection,
	CategoriesTag, CounterContainer,
	Currency, ShoppingCartButtonContainer,
	ShoppingContainer,
	TitleSection
} from "./style";
import {Minus, Plus, ShoppingCart} from "phosphor-react";
import {useContext, useState} from "react";
import {CartContext} from "../../../../contexts/CartContext.tsx";

interface CoffeeCardProp {
  coffee: CoffeeDataType
}

export function CoffeeCard({ coffee }: CoffeeCardProp) {
	const [cardItemsCounter, setCardItemsCounter] = useState(0);
	const {handleAddItemToCart} = useContext(CartContext);


	function handleIncrementCoffeeCardCounter() {
		setCardItemsCounter((prevState) => prevState + 1);
	}

	function handleDecrementCoffeeCardCounter() {
		cardItemsCounter <= 0
			? setCardItemsCounter(0)
			: setCardItemsCounter((prevState) => prevState - 1);
	}

	async function onAddItemToCart() {
		if (cardItemsCounter <= 0) return;

		await handleAddItemToCart({
			itemId: coffee.id,
			name: coffee.name,
			quantity: cardItemsCounter
		});

		setCardItemsCounter(0);
	}

	return (
		<CardContainer>
			<img src={`/src${coffee["image-src"]}`} alt={coffee.name} />
			<CategoriesSection>
				{
					coffee.category.map(category => (
						<CategoriesTag key={category}>{category}</CategoriesTag>
					))
				}
			</CategoriesSection>

			<TitleSection>
				<strong>{coffee.name}</strong>
				<span>{coffee.description}</span>
			</TitleSection>

			<ShoppingContainer>
				<Currency>R$<strong>{coffee.price.toFixed(2)}</strong></Currency>

				<CartContainer>
					<CounterContainer>
						<button type="button" onClick={handleDecrementCoffeeCardCounter}><Minus size={16} weight={"fill"} /></button>
						<span>{cardItemsCounter}</span>
						<button type="button" onClick={handleIncrementCoffeeCardCounter}><Plus size={16} weight={"fill"} /></button>
					</CounterContainer>
					<ShoppingCartButtonContainer onClick={onAddItemToCart}>
						<ShoppingCart size={22} weight={"fill"}/>
					</ShoppingCartButtonContainer>
				</CartContainer>
			</ShoppingContainer>
		</CardContainer>
	);
}
