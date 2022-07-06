import { BrowserRouter, Routes, Route } from "react-router-dom";

// own pages
import FeedPage from "./pages/FeedPage/FeedPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import "./App.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="profile" element={<FeedPage />} />
					<Route path="/" element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
