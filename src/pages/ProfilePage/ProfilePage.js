import { useState } from "react";
import "./ProfilePage.css";

// own components
import Navbar from "../../components/Navbar/Navbar";

import ProfileImg from "../../components/for_profile/ProfileImg/ProfileImg";
import ProfileTabs from "../../components/for_profile/ProfileTabs/ProfileTabs";
import AudioTab from "../../components/for_profile/TabContents/AudioTab/AudioTab";
import BookmarksTab from "../../components/for_profile/TabContents/BookmarksTab/BookmarksTab";
import FollowingTab from "../../components/for_profile/TabContents/FollowingTab/FollowingTab";
import PdfTab from "../../components/for_profile/TabContents/PdfTab/PdfTab";
import PhotosTab from "../../components/for_profile/TabContents/PhotosTab/PhotosTab";
import PostsTab from "../../components/for_profile/TabContents/PostsTab/PostsTab";
import PurchasedTab from "../../components/for_profile/TabContents/PurchasedTab/PurchasedTab";
import VideosTab from "../../components/for_profile/TabContents/VideosTab/VideosTab";
import WishlistTab from "../../components/for_profile/TabContents/WishlistTab/WishlistTab";

const ProfilePage = () => {
	// for toggle tab
	const [tabToggle, setTabToggle] = useState(1);

	return (
		<>
			<div className="container-fluid p-0">
				<Navbar />

				<div className="row profile-first-container">
					<div className="col-xl-10 col-lg-11 col-md-12 p-0 profile-img-container">
						<ProfileImg />
						<hr />
						<ProfileTabs setTabToggle={setTabToggle} tabToggle={tabToggle} />
					</div>
				</div>
				<div className="row profile-second-container">
					<div className="col-xl-10 col-lg-11 col-md-12 p-0">
						{tabToggle === 1 && <PostsTab />}

						{tabToggle === 2 && <FollowingTab />}

						{tabToggle === 3 && <PhotosTab />}

						{tabToggle === 4 && <VideosTab />}

						{tabToggle === 5 && <AudioTab />}

						{tabToggle === 6 && <PdfTab />}

						{tabToggle === 7 && <BookmarksTab />}

						{tabToggle === 8 && <WishlistTab />}

						{tabToggle === 9 && <PurchasedTab />}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
