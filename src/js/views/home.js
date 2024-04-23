import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => (
	<>
		<body id="page-top">
			{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav> */}
			<header className="bg-primary bg-gradient text-white">
				<div className="container px-4 text-center">
					<h1 className="fw-bolder">Connor's Contact List</h1>
					<p className="lead">Press the button below to see it</p>
					<Link to="/contacts">

						<a className="btn btn-lg btn-light" href="#about">Contact List</a>
					</Link>
				</div>
			</header>
			<section id="about">
				<div className="container px-4">
					<div className="row gx-4 justify-content-center">
						<div className="col-lg-8">
							<h2>This project is divided into:</h2>
							<h3>Two different views:</h3>
							<ol>
								<li>
									<strong>Contact:</strong> Contains the list of contacts.
								</li>
								<li>
									<strong>AddContact:</strong> It's just a form used to create or update contacts.
								</li>
							</ol>
							<h3>One component:</h3>
							<ol>
								<li>
									<strong>ContactCard:</strong> It just displays one contact.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light" id="services">
				<div className="container px-4">
					<div className="row gx-4 justify-content-center">
						<div className="col-lg-8">
							<h2>Services we offer</h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
						</div>
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="container px-4">
					<div className="row gx-4 justify-content-center">
						<div className="col-lg-8">
							<h2>Contact us</h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
						</div>
					</div>
				</div>
			</section>
			<footer className="py-5 bg-dark">
				<div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
			</footer>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
			<script src="js/scripts.js"></script>
		</body>
	</>
);
