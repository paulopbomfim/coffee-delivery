
import { CoffeeDataType } from "../..";
import { CardContainer } from "./style";

interface CoffeeCardProp {
  coffee: CoffeeDataType
}

export function CoffeeCard({ coffee }: CoffeeCardProp) {


	return (
		<CardContainer>
			<img src={`/src${coffee["image-src"]}`} alt={coffee.name} />
			{coffee.category.map(category => <span key={category}>{category}</span>)}
			<strong>{coffee.name}</strong>
			<span>{coffee.description}</span>
			<strong>{coffee.price}</strong>
		</CardContainer>
	);
}
