
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

interface CoffeeCardProp {
  coffee: CoffeeDataType
}

export function CoffeeCard({ coffee }: CoffeeCardProp) {


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
						<button><Minus size={16} weight={"fill"}/></button>
						<span>1</span>
						<button><Plus size={16} weight={"fill"}/> </button>
					</CounterContainer>
					<ShoppingCartButtonContainer>
						<ShoppingCart size={22} weight={"fill"}/>
					</ShoppingCartButtonContainer>
				</CartContainer>
			</ShoppingContainer>
		</CardContainer>
	);
}
