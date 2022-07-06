import { useState } from "react";

// own components
import Navbar from "../../components/Navbar/Navbar";

import ProfileImg from "../../components/for_profile/ProfileImg/ProfileImg";
import ProfileTabs from "../../components/for_profile/ProfileTabs/ProfileTabs";
import FollowingTab from "../../components/for_profile/TabContents/FollowingTab/FollowingTab";
import PostsTab from "../../components/for_profile/TabContents/PostsTab/PostsTab";

import "./ProfilePage.css";

const ProfilePage = () => {
	// for toggle tab
	const [tabToggle, setTabToggle] = useState(1);

	return (
		<>
			<div className="container-fluid p-0">
				<Navbar />

				<div className="row profile-first-container">
					<div className="col-10 p-0 profile-img-container">
						<ProfileImg />
						<hr />
						<ProfileTabs setTabToggle={setTabToggle} tabToggle={tabToggle} />
					</div>
				</div>
				<div className="row profile-second-container">
					<div className="col-10 p-0">
						{tabToggle === 1 && <PostsTab />}

						{tabToggle === 2 && <FollowingTab />}

						{tabToggle === 3 && <div>Photos</div>}

						{tabToggle === 4 && <div>Videos</div>}

						{tabToggle === 5 && <div>Audio</div>}

						{tabToggle === 6 && <div>Pdf</div>}

						{tabToggle === 7 && <div>Bookmarks</div>}

						{tabToggle === 8 && <div>Wishlist</div>}

						{tabToggle === 9 && <div>Purchased</div>}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
