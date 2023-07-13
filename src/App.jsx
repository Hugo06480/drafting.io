import "./App.css";
import Header from "./components/Header/header";
import DraftTool from "./routes/DraftTool/DraftTool";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home/Home";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Box w={"100vw"} h={"100vh"}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/draft" element={<DraftTool />} />
				</Routes>
			</Box>
		</>
	);
}

export default App;
