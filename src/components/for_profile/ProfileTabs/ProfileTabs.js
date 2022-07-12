import "./ProfileTabs.css";
import { useState } from "react";

const ProfileTabs = ({ tabToggle, setTabToggle }) => {
	const [moreToggle, setMoreToggle] = useState(false);
	return (
		<>
			<div className="profile-tab-container">
				<div
					className={tabToggle === 1 ? "tab active" : "tab"}
					onClick={() => setTabToggle(1)}
				>
					Posts
				</div>

				<div
					className={tabToggle === 2 ? "tab active" : "tab"}
					onClick={() => setTabToggle(2)}
				>
					Following
				</div>
				<div
					className={tabToggle === 3 ? "tab active" : "tab"}
					onClick={() => setTabToggle(3)}
				>
					Photos
				</div>
				<div
					className={tabToggle === 4 ? "tab active" : "tab"}
					onClick={() => setTabToggle(4)}
				>
					Videos
				</div>
				<div
					className={tabToggle === 5 ? "tab active" : "tab"}
					onClick={() => setTabToggle(5)}
				>
					Audio
				</div>
				<div
					className={tabToggle === 6 ? "tab active" : "tab"}
					onClick={() => setTabToggle(6)}
				>
					Pdf
				</div>

				<div
					className={tabToggle === 7 ? "tab active" : "tab"}
					onClick={() => setTabToggle(7)}
				>
					Bookmarks
				</div>

				<div
					className={tabToggle === 8 ? "tab active" : "tab"}
					onClick={() => setTabToggle(8)}
				>
					Wishlist
				</div>

				<div
					className={tabToggle === 9 ? "tab active" : "tab"}
					onClick={() => setTabToggle(9)}
				>
					Purchased
				</div>

				{/* more tab start  */}
				<div
					className={moreToggle ? "tab action" : "tab"}
					id="more"
					onClick={() => setMoreToggle(!moreToggle)}
				>
					More
					<ul className={moreToggle ? "active" : ""}>
						<li
							onClick={() => {
								setTabToggle(3);
								setMoreToggle(!moreToggle);
							}}
						>
							Photos
						</li>
						<li
							onClick={() => {
								setTabToggle(4);
								setMoreToggle(!moreToggle);
							}}
						>
							Videos
						</li>

						<li
							onClick={() => {
								setTabToggle(5);
								setMoreToggle(!moreToggle);
							}}
						>
							Audio
						</li>

						<li
							onClick={() => {
								setTabToggle(6);
								setMoreToggle(!moreToggle);
							}}
						>
							Pdf
						</li>

						<li
							onClick={() => {
								setTabToggle(7);
								setMoreToggle(!moreToggle);
							}}
						>
							Bookmarks
						</li>

						<li
							onClick={() => {
								setTabToggle(8);
								setMoreToggle(!moreToggle);
							}}
						>
							Wishlist
						</li>

						<li
							onClick={() => {
								setTabToggle(9);
								setMoreToggle(!moreToggle);
							}}
						>
							Purchased
						</li>
					</ul>
				</div>
				{/* more tab end  */}
			</div>
		</>
	);
};

export default ProfileTabs;
