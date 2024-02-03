import {Trash} from "phosphor-react";
import * as S from "./style.ts";

//TODO remover importação de imagem
import teste from "../../../assets/coffee/café-com-leite.png";

export function ShoppingCartDetails() {
	return (
		<S.CartDetailsContainer>
			<S.ItemsList>
				<S.Item>
					<S.ItemInfoSection>
						<img src={teste} alt="teste"/>
						<S.ItemInfo>
							<span>Latte</span>
							<div>
								{/*	criar componentes de contador*/}
								<button type="button">
									<i>
										<Trash size={20}/>
									</i>
									<span>Remover</span>
								</button>
							</div>
						</S.ItemInfo>
					</S.ItemInfoSection>
					<strong>R$14,85</strong>
				</S.Item>
			</S.ItemsList>
			<S.TotalSection>
				<div>
					<span>Subtotal</span>
					<span>R$29,70</span>
				</div>
				<div>
					<span>Entrega</span>
					<S.Shipping freeShipping={true}>Grátis</S.Shipping>
				</div>
				<div>
					<strong>Total</strong>
					<strong>R$29,70</strong>
				</div>
			</S.TotalSection>
			<S.SubmitButton type="submit">Confirmar pedido</S.SubmitButton>
		</S.CartDetailsContainer>
	);
}