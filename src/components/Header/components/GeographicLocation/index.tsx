import { MapPin } from "phosphor-react";
import { GeographicLocationContainer } from "./styles";
import { useEffect, useState } from "react";

interface locationType {
	city: string,
	principalSubdivisionCode: string
}

export default function GeographicLocation() {
	const [location, setLocation] = useState({} as locationType);

	let latitude: number;
	let longitude: number;
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
		});
	}
	
	useEffect(() => {
		const URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-BR`;
		fetch(URL).then((response) =>  response.json()).then((data) => setLocation(data));	
	}, []);

	return (
		<GeographicLocationContainer>
			<MapPin size={22} weight="fill" />
			{
				Object.keys(location).length !== 0
					? (<span>{location.city}, {location.principalSubdivisionCode.split("-")[1]}</span>)
					: ("")
			}
		</GeographicLocationContainer>
	);
}