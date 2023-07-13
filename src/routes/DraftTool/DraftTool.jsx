import { Box } from "@chakra-ui/react";
import "./DraftTool.css";
import { red } from "@mui/material/colors";
import ChampionList from "../../components/ChampionList/ChampionList";
function draft() {
	return (
		<>
			<Box w={"100vw"} h={"100vh"} bg={"blackAlpha.400"}>
				<ChampionList></ChampionList>
			</Box>
		</>
	);
}

export default draft;
