import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { BenefitsContainer, HeroSection, HeroTitle, HomeContainer } from "./style";

import heroImage from "../../assets/hero-image.png";

export function Home() {
	return (
		<HomeContainer>
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


		</HomeContainer>
	);
}
