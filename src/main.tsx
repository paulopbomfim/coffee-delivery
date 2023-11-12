import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";

import { App } from "./App.tsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import {CartContextProvider} from "./contexts/CartContext.tsx";


//* Mock server
createServer({
	routes() {
		this.namespace = "api";
		this.urlPrefix = "http://localhost:3000";
		this.get("/coffee-list", () => (
			[
				{
					"id": 1,
					"name": "Expresso Tradicional",
					"description": "O tradicional café feito com água quente e grãos moídos",
					"price": 9.90,
					"category": ["tradicional"],
					"image-src": "/assets/coffee/expresso.png"
				},
				{
					"id": 2,
					"name": "Expresso Americano",
					"description": "Expresso diluído, menos intenso que o tradicional",
					"price": 9.90,
					"category": ["tradicional"],
					"image-src": "/assets/coffee/americano.png"
				},
				{
					"id": 3,
					"name": "Expresso Cremoso",
					"description": "Café expresso tradicional com espuma cremosa",
					"price": 9.90,
					"category": ["tradicional"],
					"image-src": "/assets/coffee/expresso-cremoso.png"
				},
				{
					"id": 4,
					"name": "Expresso Gelado",
					"description": "Bebida preparada com café expresso e cubos de gelo",
					"price": 9.90,
					"category": ["tradicional", "gelado"],
					"image-src": "/assets/coffee/café-gelado.png"
				},
				{
					"id": 5,
					"name": "Café com Leite",
					"description": "Meio a meio de expresso tradicional com leite vaporizado",
					"price": 9.90,
					"category": ["tradicional", "com leite"],
					"image-src": "/assets/coffee/café-com-leite.png"
				},
				{
					"id": 6,
					"name": "Latte",
					"description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
					"price": 9.90,
					"category": ["tradicional", "com leite"],
					"image-src": "/assets/coffee/latte.png"
				},
				{
					"id": 7,
					"name": "Capuccino",
					"description": "Bebida com canela feita de doses iguais de café, leite e espuma",
					"price": 9.90,
					"category": ["tradicional", "com leite"],
					"image-src": "/assets/coffee/capuccino.png"
				},
				{
					"id": 8,
					"name": "Macchiato",
					"description": "Café expresso misturado com um pouco de leite quente e espuma",
					"price": 9.90,
					"category": ["tradicional", "com leite"],
					"image-src": "/assets/coffee/macchiato.png"
				},
				{
					"id": 9,
					"name": "Mocaccino",
					"description": "Café expresso com calda de chocolate, pouco leite e espuma",
					"price": 9.90,
					"category": ["tradicional", "com leite"],
					"image-src": "/assets/coffee/mochaccino.png"
				},
				{
					"id": 10,
					"name": "Chocolate Quente",
					"description": "Bebida feita com chocolate dissolvido no leite quente e café",
					"price": 9.90,
					"category": ["especial", "com leite"],
					"image-src": "/assets/coffee/chocolate-quente.png"
				},
				{
					"id": 11,
					"name": "Cubano",
					"description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
					"price": 9.90,
					"category": ["especial", "alcoólico", "gelado"],
					"image-src": "/assets/coffee/cubano.png"
				},
				{
					"id": 12,
					"name": "Havaiano",
					"description": "Bebida adocicada preparada com café e leite de coco",
					"price": 9.90,
					"category": ["especial"],
					"image-src": "/assets/coffee/havaiano.png"
				},
				{
					"id": 13,
					"name": "Árabe",
					"description": "Bebida preparada com grãos de café árabe e especiarias",
					"price": 9.90,
					"category": ["especial"],
					"image-src": "/assets/coffee/arabe.png"
				},
				{
					"id": 14,
					"name": "Irlandês",
					"description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
					"price": 9.90,
					"category": ["especial", "alcoólico"],
					"image-src": "/assets/coffee/irlandês.png"
				},
					
			]
		));

		this.passthrough("https://api.bigdatacloud.net/**");
	}
});

//* -------

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<CartContextProvider>
				<App />
			</CartContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
);
