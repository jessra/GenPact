import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../components/Inicio";
import TheGame from "../components/TheGame.jsx";
import Heroes from "../components/Heroes.jsx";
import Media from "../components/Media.jsx";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Inicio />}/>
				<Route path="/TheGame" element={<TheGame />} />
				<Route path="/Heroes" element={<Heroes />} />
				<Route path="/Media" element={<Media />} />
			</Routes>
		</BrowserRouter>
	);
}