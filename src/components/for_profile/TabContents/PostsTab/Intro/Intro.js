import "./Intro.css";

const Intro = () => {
	return (
		<>
			<div className="intro-container">
				<div className="header">
					<h5>Intro</h5>
					<i className="bi bi-pencil-square"></i>
				</div>

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
		</>
	);
};

export default Intro;
