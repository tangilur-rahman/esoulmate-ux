import { useState } from "react";
import "./React.css";

const React = () => {
	const [love, setLove] = useState(false);
	const [bookmark, setBookmark] = useState(false);

	return (
		<>
			{/* react-container start  */}
			<div className="react-container">
				{/* react-icons start  */}
				<div className="react-icons">
					<div className="left">
						<span onClick={() => setLove(!love)}>
							{love ? (
								<i className="bi bi-heart-fill active" id="fill-love"></i>
							) : (
								<i className="bi bi-suit-heart inactive" id="empty-love"></i>
							)}
						</span>

						<label htmlFor="comment">
							<i className="bi bi-chat-heart"></i>
						</label>

						<div className="share">
							<i className="bi bi-share"></i>
						</div>
					</div>

					<div className="right" onClick={() => setBookmark(!bookmark)}>
						{bookmark ? (
							<i
								class="bi bi-bookmark-heart-fill active"
								id="fill-bookmark"
							></i>
						) : (
							<i
								className="bi bi-bookmark-heart inactive"
								id="empty-bookmark"
							></i>
						)}
					</div>
				</div>
				{/* react-icons end  */}

				{/* liked section start  */}
				<div className="liked-container">
					<div className="liked-by">
						<span>
							<img
								src="/assets/images/profile/tangil.png"
								className="img-fluid"
								alt="profile-img"
							/>
						</span>
						<span>
							<img
								src="/assets/images/profile/developer-4.png"
								className="img-fluid"
								alt="profile-img"
							/>
						</span>
						<span>
							<img
								src="/assets/images/profile/developer-5.png"
								className="img-fluid"
								alt="profile-img"
							/>
						</span>

						<p>
							Liked by <b>Tangilur Rahman</b> and <b>2,323 others</b>
						</p>
					</div>
				</div>
				{/* liked section end  */}

				{/* react-container end  */}
			</div>
		</>
	);
};

export default React;
