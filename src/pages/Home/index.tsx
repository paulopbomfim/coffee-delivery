import { useEffect, useState } from "react";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import {BenefitsContainer, CoffeeContainer, HeroSection, HeroTitle, ListSection} from "./style";
import { apiCoffee } from "../../axios/api";

import heroImage from "../../assets/hero-image.png";
import { CoffeeCard } from "./components/CoffeeCard";

export interface CoffeeDataType {
	id: number;
	name: string;
	description: string;
	price: number;
	category: string[];
	"image-src": string;
}


export function Home() {
	const [coffeeData, setCoffeeData] = useState<CoffeeDataType[]>([]);

	useEffect(() => {
		apiCoffee
			.get("coffee-list")
			.then((response) => setCoffeeData(response.data))
			.catch((err) => console.log("Houve um erro durante a requisição:" + err));
	}, []);

	return (
		<main>
			<HeroSection>
				<HeroTitle>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</span>
				</HeroTitle>

				<BenefitsContainer>
					<span> <i className="cart"><ShoppingCart size={22} weight="fill" /></i> Compra simples e segura</span>
					<span> <i className="package"><Package size={22} weight="fill" /></i> Embalagem mantém o café intacto</span>
					<span> <i className="timer"><Timer size={22} weight="fill" /></i> Entrega rápida e rastreada</span>
					<span> <i className="coffee"><Coffee size={22} weight="fill" /></i> O café chega fresquinho até você</span>
				</BenefitsContainer>

				<img src={heroImage} alt="Copo de café com grãos de café atrás." />
			</HeroSection>

			<ListSection>
				<h2>Nossos cafés</h2>

				<CoffeeContainer>
					{
						coffeeData.map((coffee) => (
							<CoffeeCard key={coffee.id} coffee={coffee}/>
						))
					}
				</CoffeeContainer>
			</ListSection>
		</main>
	);
}
