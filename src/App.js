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
					<Route path="/" element={<FeedPage />} />
					<Route path="profile" element={<ProfilePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
