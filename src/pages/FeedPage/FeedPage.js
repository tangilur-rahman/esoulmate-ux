import "./FeedPage.css";

// own components
import Navbar from "../../components/Navbar/Navbar";
import FeedBody from "../../components/for_feed/FeedBody/FeedBody";

const FeedPage = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<Navbar />
				<div className="row feed-body-container">
					<div className="col-11 p-0">
						<FeedBody />
					</div>
				</div>
			</div>
		</>
	);
};

export default FeedPage;
