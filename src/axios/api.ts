import axios from "axios";

export const apiCoffee = axios.create({
	baseURL: "http://localhost:3000/api"
});

export const apiLocation = axios.create({
	baseURL: "https://api.bigdatacloud.net/data/reverse-geocode-client"
});
