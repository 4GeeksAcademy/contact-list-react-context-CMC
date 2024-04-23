const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactData: [
				// {
				// 	name: "Declan",
				// 	phone: "41",
				// 	email: "rice@arsenal.com",
				// 	address: "emirates stadium",
				// 	id: 18
				// },
				// {
				// 	name: "Ben",
				// 	phone: "4",
				// 	email: "white@arsenal.com",
				// 	address: "emirates stadium",
				// 	id: 18
				// }
			]
			// contactIdToDelete: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAgendaData: function () {
				fetch("https://playground.4geeks.com/contact/agendas")
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						// console.log(data);
						setStore({ contactData: [...getStore().contactData, ...data] });

					})
					.catch(error => console.log(error));
			},
			createUser: function (slug) {
				fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			getContacts: async function () {
				try {

					const response = await fetch("https://playground.4geeks.com/contact/agendas/connorc/contacts");

					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					const data = await response.json();
					setStore({ contactData: data.contacts });
				} catch (error) { console.error("Error fetching contacts:", error); };
			},
			createContact: function (name, phone, email, address) {
				fetch("https://playground.4geeks.com/contact/agendas/connorc/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						email: email,
						phone: phone,
						address: address
					})
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			deleteContact: async function (id) {
				try {
					await fetch("https://playground.4geeks.com/contact/agendas/connorc/contacts/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					})
				} catch (e) {
					console.log(e);
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
