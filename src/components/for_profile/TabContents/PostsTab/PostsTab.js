import CreatePost from "../../../for_feed/FeedBody/FeedMiddle/components/CreatePost/CreatePost";
import Posts from "../../../for_feed/FeedBody/FeedMiddle/components/Posts/Posts";
import "./PostsTab.css";

const PostsTab = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row ">
            <div className="post-tab-main-container">
					<div className="col-5 p-0">
						<div className="intro-container">
							<h5>Intro</h5>

							<div className="intro-info">
								<i className="bi bi-mortarboard-fill"></i>
								studies <span>CST</span> at{" "}
								<span>Yunnan Technology & Business University</span>
							</div>

							<div className="intro-info">
								<i className="bi bi-house-heart-fill"></i>
								Lives in <span> Kunming, Yunnan</span>
							</div>

							<div className="intro-info">
								<i className="bi bi-geo-alt-fill"></i>
								From <span>Akkelpur, Rajshahi, Bangladesh</span>
							</div>

							<div className="intro-info">
								<i className="bi bi-envelope-heart-fill"></i>
								Email : <span>mohammadtangilurrahman@gmail.com</span>
							</div>

							<div className="intro-info">
								<i className="bi bi-telephone-fill"></i>
								Phone : <span>+88 01750928575</span>
							</div>

							<div className="intro-info">
								<i className="bi bi-geo-alt-fill"></i>
								Followed by <span>187 peoples</span>
							</div>
						</div>
					</div>
					<div className="col-7 p-0">
						<div className="post-tab-container">
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
