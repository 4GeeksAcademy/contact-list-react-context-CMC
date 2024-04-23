import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	const deleteContact = async (id) => {
		await actions.deleteContact(id);
		await actions.getContacts();
		props.onClose();
	}
	const [state, setState] = useState({
		//initialize state here
	});
	
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button
							onClick={() => props.onClose()}
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
							aria-label="Close">
							Oh no!
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => deleteContact(props.contactId)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	contactId: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
