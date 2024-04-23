import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		contactIdToDelete: null
	});
	const { store, actions } = useContext(Context);

	const handleDelete = (id) => {
		setState({ showModal: true, contactIdToDelete: id });
	};

	useEffect(() => {
		actions.getContacts();
	}, []);

	return (
        <>
        <h1>Contacts</h1>
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactData.map((item, index) => {
							return (
								<ContactCard
									key={index}
									name={item.name}
									email={item.email}
									phone={item.phone}
									address={item.address}
									onDelete={() => handleDelete(item.id)}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} contactId={state.contactIdToDelete} onClose={() => setState({ showModal: false })} />
		</div>
        </>
	);
};
