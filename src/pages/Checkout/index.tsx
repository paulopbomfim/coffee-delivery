import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import * as S from "./style.ts";
import {AddressForm} from "./AddressForm";
import {ShoppingCartDetails} from "./ShoppingCartDetails";

export function Checkout() {
	return (
		<S.CheckoutMain>
			<S.FormContainer>
				<h2>Complete seu pedido</h2>
				<S.TextInputsContainer>
					<S.TextInputsInfoContainer>
						<S.MapPinIcon>
							<MapPinLine size={32} weight={"regular"}/>
						</S.MapPinIcon>
						<div>
							<strong>Endereço de Entrega</strong>
							<span>Informe o endereço onde deseja receber seu pedido</span>
						</div>
					</S.TextInputsInfoContainer>
					<AddressForm />
				</S.TextInputsContainer>
				<S.PaymentMethodContainer>
					<S.RadioInputInfoContainer>
						<S.CurrencyDollarIcon>
							<CurrencyDollar size={32} />
						</S.CurrencyDollarIcon>
						<div>
							<strong>Pagamento</strong>
							<span>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</span>
						</div>
					</S.RadioInputInfoContainer>
					<S.RadiosInput>
						<S.PaymentMethodRadio>
							<input type="radio" name="payment-method"/>
							<S.RadioIcon>
								<CreditCard size={32} />
							</S.RadioIcon>
							<span>Cartão de crédito</span>
						</S.PaymentMethodRadio>
						<S.PaymentMethodRadio>
							<input type="radio" name="payment-method"/>
							<S.RadioIcon>
								<Bank size={32} />
							</S.RadioIcon>
							<span>Cartão de débito</span>
						</S.PaymentMethodRadio>
						<S.PaymentMethodRadio>
							<input type="radio" name="payment-method"/>
							<S.RadioIcon>
								<Money size={32} />
							</S.RadioIcon>
							<span>Dinheiro</span>
						</S.PaymentMethodRadio>
					</S.RadiosInput>
				</S.PaymentMethodContainer>
			</S.FormContainer>
			<div>
				<h2>Cafés selecionados</h2>
				<ShoppingCartDetails />
			</div>
		</S.CheckoutMain>
	);
}
