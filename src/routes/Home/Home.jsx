import { AbsoluteCenter, Center, Flex, Text } from "@chakra-ui/react";

function Home() {
	return (
		<Flex w={"100vw"} h={"100vh"} bg={"blackAlpha.400"}>
			<AbsoluteCenter>
				<Text bg={"blackAlpha.400"} fontSize={"xxx-large"}>
					Welcome
				</Text>
			</AbsoluteCenter>
		</Flex>
	);
}

export default Home;
