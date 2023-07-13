import { Center, Box, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<HStack w={"100vw"} h={"7vh"} pl={"24px"} pr={"24px"}>
			<Link className="link" to={"/"}>
				<Center className="hoverGray" w={"100%"} h={"100%"} cursor={"pointer"}>
					<Image boxSize={"48px"} src="/logosite.png" />
				</Center>
			</Link>
			<Link className="link" to={"/draft"}>
				<Center className="hoverGray" w={"100%"} h={"100%"} cursor={"pointer"}>
					<Text w={""} color={"white"}>
						Draft
					</Text>
				</Center>
			</Link>
			<Link className="link" to={"/"}>
				<Center className="hoverGray" w={"100%"} h={"100%"} cursor={"pointer"}>
					<Text w={""} color={"white"}>
						Stats
					</Text>
				</Center>
			</Link>
		</HStack>
	);
}

export default Header;
