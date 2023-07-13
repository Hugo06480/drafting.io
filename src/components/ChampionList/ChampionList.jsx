import {
	AbsoluteCenter,
	Center,
	Flex,
	Grid,
	Text,
	Image,
	Box,
} from "@chakra-ui/react";
import champions from "../../utils/champions";
import ChampionTile from "../ChampionTile/ChampionTile";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function ChampionList() {
	function testClick() {
		console.log("test");
	}

	const [collectedProps, drop] = useDrop(() => ({
		accept: "champImage",
		drop: (item, monitor) => {
			console.log(item, monitor);
		},
	}));

	return (
		<>
			<Flex h={"10vh"}></Flex>
			<Flex>
				<Flex
					w={"25vw"}
					flexDirection={"column"}
					flexGrow={"inherit"}
					alignItems={"center"}
					justifyContent={"start"}
				>
					<Box boxSize={"120px"} mb={"10px"} ref={drop}>
						<Image bg={"black"} src="/empty_champ.png" />
					</Box>
					<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
						<Image bg={"black"} src="/empty_champ.png" />
					</Box>
					<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
						<Image bg={"black"} src="/empty_champ.png" />
					</Box>
					<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
						<Image bg={"black"} src="/empty_champ.png" />
					</Box>
					<Box boxSize={"120px"} mt={"10px"}>
						<Image bg={"black"} src="/empty_champ.png" />
					</Box>
				</Flex>
				<Center>
					<Flex
						w={"50vw"}
						h={"83vh"}
						overflowY="auto"
						css={{
							"&::-webkit-scrollbar": {
								width: "4px",
							},
							"&::-webkit-scrollbar-track": {
								width: "6px",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "white",
								borderRadius: "24px",
							},
						}}
						flexWrap={"wrap"}
					>
						{Object.values(champions.data).map((champion) => (
							<Flex
								flexDirection={"column"}
								key={champion.id}
								m={"10px"}
								onClick={testClick}
							>
								<ChampionTile id={champion.id} name={champion.name} />
							</Flex>
						))}
					</Flex>
				</Center>
				<Flex w={"25vw"}>
					<Flex
						w={"25vw"}
						flexDirection={"column"}
						flexGrow={"inherit"}
						alignItems={"center"}
						justifyContent={"start"}
					>
						<Box boxSize={"120px"} mb={"10px"}>
							<Image bg={"black"} src="/empty_champ.png" />
						</Box>
						<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
							<Image bg={"black"} src="/empty_champ.png" />
						</Box>
						<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
							<Image bg={"black"} src="/empty_champ.png" />
						</Box>
						<Box boxSize={"120px"} mb={"10px"} mt={"10px"}>
							<Image bg={"black"} src="/empty_champ.png" />
						</Box>
						<Box boxSize={"120px"} mt={"10px"}>
							<Image bg={"black"} src="/empty_champ.png" />
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}

export default ChampionList;
