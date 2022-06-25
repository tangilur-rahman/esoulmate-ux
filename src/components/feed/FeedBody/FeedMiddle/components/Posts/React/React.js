import { useState } from "react";
import "./React.css";

const React = () => {
	const [love, setLove] = useState(false);
	const [bookmark, setBookmark] = useState(false);

	return (
		<>
			<div className="react-container">
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
			</div>
		</>
	);
};

export default React;
