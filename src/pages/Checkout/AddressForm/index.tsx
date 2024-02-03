import * as S from "./style.ts";

export function AddressForm() {
	return (
		<S.AddressContainer>
			<S.ZipCodeLabel>
				<span>CEP</span>
				<input type="text" required/>
			</S.ZipCodeLabel>
			<S.StreetLabel>
				<span>Rua</span>
				<input type="text" required/>
			</S.StreetLabel>
			<S.NumberLabel>
				<span>Número</span>
				<input type="number" required/>
			</S.NumberLabel>
			<S.ComplementLabel>
				<span>Complemento</span>
				<input type="text" required/>
			</S.ComplementLabel>
			<S.NeighborhoodLabel>
				<span>Bairro</span>
				<input type="text" required/>
			</S.NeighborhoodLabel>
			<S.CityLabel>
				<span>Cidade</span>
				<input type="text" required/>
			</S.CityLabel>
			<S.StateLabel>
				<span>UF</span>
				<input type="text" required/>
			</S.StateLabel>
		</S.AddressContainer>
	);
}
