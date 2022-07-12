import "./ProfileImg.css";

import friend from "./../../../dummy-data/friends.json";

const ProfileImg = () => {
	return (
		<>
			{/* profile-img-container start  */}
			<img src="/assets/posts/story-8.png" alt="cover-img" id="cover-img" />

			<div className="profile-img">
				<div id="profile-img">
					<img
						src="/assets/images/profile/developer-3.png"
						alt="profile-img"
						className="img-fluid"
					/>
				</div>

				<div className="profile-info">
					<div className="user-info">
						<h2>Tangilur Rahman</h2>
						<span>3.2k following </span>

						<div className="friends">
							{friend &&
								friend.map((value, index) => {
									return (
										<div key={index}>
											<img
												src={value.friend}
												alt="follower-img"
												className={
													index === 0 ? "img-fluid firstEle" : "img-fluid"
												}
											/>
										</div>
									);
								})}
						</div>
					</div>

					<div className="profile-btn" style={{ display: "none" }}>
						<button>
							<i className="bi bi-plus-circle"></i>Add to Story
						</button>
						<button>
							<i className="bi bi-pencil"></i>Edit profile
						</button>
					</div>

					<div className="profile-btn" id="for-others">
						<button>
							<i className="bi bi-chat-heart"></i>Message
						</button>

						<button style={{ color: "#023e8a", fontWeight: "700" }}>
							<i className="bi bi-plus-circle"></i>Follow
							{/* <i class="bi bi-dash-circle"></i>Unfollow */}
						</button>
					</div>
				</div>
			</div>
			{/* profile-img-container end  */}
		</>
	);
};

export default ProfileImg;
