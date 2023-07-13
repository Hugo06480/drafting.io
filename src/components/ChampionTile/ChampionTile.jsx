import { Image, Text } from "@chakra-ui/react";
import { useDrag } from "react-dnd";

function ChampionTile({ name, id }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "champImage",
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
		end: (item, monitor) => {
			console.log(item);
		},
	}));

	const championLink =
		"https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/";
	return (
		<>
			<Image
				ref={drag}
				src={championLink + id + ".png"}
				draggable={"false"}
				opacity={isDragging ? 0.5 : 1}
			></Image>
		</>
	);
}

export default ChampionTile;
