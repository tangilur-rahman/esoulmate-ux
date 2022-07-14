import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
	const [dropdownT, setDropdownT] = useState("");

	return (
		<>
			<div className="row nav-main-container">
				<div className="col-xl-11 col-lgn-12 ">
					<div className="row">
						{/* **** navbar-left start **** */}
						<div className="col-3 navbar-left">
							<img src="/assets/logo/esoulmate-logo.png" alt="logo" />
							<h2>Esoulmate</h2>
						</div>
						{/* **** navbar-left end ****  */}

						{/* **** navbar-middle start ****  */}
						<div className="col-4 navbar-middle">
							<div className="search-bar">
								<i className="bi bi-search-heart"></i>
								<input
									type="search"
									name="search"
									id="search"
									autoComplete="off"
									placeholder="search for knowledge"
								/>
							</div>
						</div>
						{/* **** navbar-middle end **** */}

						{/* **** navbar-right start **** */}
						<div className="col-5 navbar-right">
							<div className="icon-style">
								<label htmlFor="create-post">
								 
								   <span className="badge">
									<i className="bi bi-plus-circle-dotted"></i>
									</span>

								</label>

								<span className="badge">
									<i className="bi bi-people-fill"></i>
									<div>9<span>+</span></div> 
								</span>

								<span className="badge">
									<i className="bi bi-chat-heart"></i>
									<div>9<span>+</span></div> 
								</span>

								<span className="badge">
									<i className="bi bi-bell"></i>
									<div>9<span>+</span></div> 

								</span>
							</div>

							<span id="profile-photo">
								<img
									src="/assets/images/profile/tangil.png"
									alt="profile-img"
									className="img-fluid profile-photo"
									onClick={() => setDropdownT(!dropdownT)}
								/>

								<ul className={dropdownT ? "action" : ""}>
									<li
										onClick={() => {
											setDropdownT(!dropdownT);
										}}
									>
										<span className="badge">
											<i className="bi bi-people-fill"></i>
											<h5>Following</h5>
											<div>9<span>+</span></div> 
										</span>
									</li>

									<li
										onClick={() => {
											setDropdownT(!dropdownT);
										}}
									>
										<span className="badge">
											<i className="bi bi-chat-heart"></i>
											<h5>Messages</h5>
											<div>9<span>+</span></div> 
										</span>
									</li>

									<li
										onClick={() => {
											setDropdownT(!dropdownT);
										}}
									>
										<span className="badge">
											<i className="bi bi-bell"></i>
											<h5>Notifications</h5>
											<div>9<span>+</span></div> 
										</span>
									</li>
									
									<li
										onClick={() => {
											setDropdownT(!dropdownT);
										}}
									>
										<span className="badge">
										<i className="bi bi-person-circle"></i>
											<h5>My Profile</h5>
											
										</span>
									</li>

								</ul>
							</span>
						</div>
						{/* **** navbar-right end  **** */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
