import ProfileImg from "../../components/for_profile/ProfileImg/ProfileImg";
import "./ProfilePage.css";

const ProfilePage = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row profile-page-container">
					<div className="col-11 p-0">
						<ProfileImg />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
