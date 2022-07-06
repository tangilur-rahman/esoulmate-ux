import Intro from "./Intro/Intro";
import "./PostsTab.css";

import CreatePost from "../../../for_feed/FeedBody/FeedMiddle/components/CreatePost/CreatePost";
import Posts from "../../../for_feed/FeedBody/FeedMiddle/components/Posts/Posts";
import Photos from "./Photos/Photos";
import Following from "./Following/Following";

const PostsTab = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row ">
					<div className="post-tab-main-container">
						<div className="col-5 p-0 post-left-container">
							<Intro />
							<Photos />
							<Following />
						</div>
						<div className="col-7 p-0">
							<div className="post-right-container">
								<CreatePost />
								<Posts />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostsTab;
