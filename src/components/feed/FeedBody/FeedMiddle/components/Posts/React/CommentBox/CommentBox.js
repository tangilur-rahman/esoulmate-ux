import "./CommentBox.css";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Picker from "emoji-picker-react";

const CommentBox = () => {
	const [replyLove, setReplyLove] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [emojiToggle, setEmojiToggle] = useState(false);
	const [comment, setComment] = useState("");

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);
		setComment(comment + emojiObject.emoji);
		setEmojiToggle(false);
	};

	const onChange = (event) => {
		setComment(event.target.value);
	};

	const onKeyDown = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setComment("");
		}
	};
	return (
		<>
			{/* comments section start  */}
			<div className="comment-container">
				<div className="all-comments">
					View <span>235</span> previous comments
					<hr />
				</div>

				{/* recent-comment start  */}
				<div className="recent-comment">
					<img
						src="/assets/images/profile/tangil.png"
						alt="profile-img"
						className="img-fluid profile-photo"
					/>

					<div className="comment-box">
						<div className="comment">
							<h6>Tangilur Rahman</h6>
							<p>What a beautiful moment!</p>
							<div className="count-react">
								<i class="bi bi-heart-fill">
									<span>5</span>
								</i>
							</div>
						</div>

						<div className="react">
							<span onClick={() => setReplyLove(!replyLove)}>
								{replyLove ? (
									<i className="bi bi-heart-fill active" id="reply-like"></i>
								) : (
									<i
										className="bi bi-suit-heart inactive"
										id="reply-dislike"
									></i>
								)}
							</span>

							<p id="reply">Reply</p>
							<p>7h</p>
						</div>
					</div>
				</div>
				{/* recent-comment end  */}

				{/* comment-input start  */}
				<div className="comment-input">
					<img
						src="/assets/images/profile/tangil.png"
						alt="profile-img"
						className="profile-photo img-fluid"
					/>
					<div className="input-box">
						<TextareaAutosize
							name="for-comment"
							id="for-comment"
							placeholder="Write a comment..."
							rows="1"
							onFocus={() => setEmojiToggle(false)}
							onChange={onChange}
							value={comment}
							autoComplete="off"
							onKeyDown={onKeyDown}
						></TextareaAutosize>

						<i
							className="bi bi-emoji-heart-eyes"
							onClick={() => setEmojiToggle(!emojiToggle)}
						></i>

						{emojiToggle && (
							<Picker
								onEmojiClick={onEmojiClick}
								pickerStyle={{
									position: "absolute",
									bottom: "40px",
									width: "50%"
								}}
							/>
						)}
					</div>
				</div>
				{/* comment-input end  */}
			</div>
			{/* comments section end  */}
		</>
	);
};

export default CommentBox;
