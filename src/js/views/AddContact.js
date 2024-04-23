import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const AddContact = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const { store, actions } = useContext(Context);
	// const history = useHistory()

	const handleFormSubmit = (e) => {
		e.preventDefault();
		actions.createContact(fullName, email, address, phone);
		setFullName("");
		setEmail("");
		setPhone("");
		setAddress("");
		// history.push("/contacts");
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={fullName}
							onChange={event => setFullName(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={phone}
							onChange={event => setPhone(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={address}
							onChange={event => setAddress(event.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/contacts">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
