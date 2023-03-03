import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import SideBar from "./common/SideBar";

function App() {
	return (
		<>
			<Header />
			<div>
				<div style={{ display: "flex" }}>
					<SideBar />
					<Routes>
						<Route path="/" element={<FirstPage />} />
						<Route path="/second" element={<SecondPage />} />
						<Route path="/third" element={<ThirdPage />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
