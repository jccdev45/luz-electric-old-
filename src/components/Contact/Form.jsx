import { navigate } from "gatsby";
import React, { useState, useRef } from "react";

export default function ContactForm() {
	const [contactState, setContactState] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const contactRef = useRef(null);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "+" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setContactState({ ...contactState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formRef = contactRef.current;

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": formRef.getAttribute("name"),
				...contactState,
			}),
		})
			.then(() => navigate("/"))
			.catch((error) => alert(error));

		setContactState({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className="flex flex-col items-center justify-center w-full p-4 mx-auto rounded shadow-xl md:w-2/3">
			<h2 className="text-2xl">Contact Us:</h2>
			<form
				name="Contact"
				className="flex flex-col items-center w-10/12 p-4 mx-auto rounded shadow-lg md:shadow-none md:w-full"
				method="post"
				action="/"
				ref={contactRef}
				onSubmit={handleSubmit}
				netlify-honeypot="bot-field"
				data-netlify="true"
			>
				<input type="hidden" name="bot-field" onChange={handleChange} />
				<input type="hidden" name="form-name" value="Contact" />

				<div className="flex flex-col justify-start w-full my-2">
					<label className="mr-2" htmlFor="name">
						Name
					</label>
					<input
						name="name"
						className="p-2 rounded shadow-inner"
						onChange={handleChange}
						value={contactState.name}
						type="text"
						placeholder="John Smith"
					/>
				</div>
				<div className="flex flex-col justify-start w-full my-2">
					<label className="mr-2" htmlFor="email">
						Email
					</label>
					<input
						name="email"
						className="p-2 rounded shadow-inner"
						onChange={handleChange}
						value={contactState.email}
						type="email"
						placeholder="name@example.com"
					/>
				</div>

				<div className="flex flex-col justify-start w-full my-2">
					<label className="mr-2" htmlFor="phone">
						Phone
					</label>
					<input
						name="phone"
						className="p-2 rounded shadow-inner"
						onChange={handleChange}
						value={contactState.phone}
						type="text"
						placeholder="(123) 456-7890"
					/>
				</div>
				<div className="flex flex-col justify-start w-full my-2">
					<label className="mr-2" htmlFor="subject">
						Subject
					</label>
					<input
						name="subject"
						className="p-2 rounded shadow-inner"
						onChange={handleChange}
						value={contactState.subject}
						type="text"
						placeholder="Estimate, service appointment, emergency, etc.."
					/>
				</div>

				<div className="flex flex-col justify-start w-full my-2">
					<label className="mr-2" htmlFor="message">
						Message
					</label>
					<textarea
						name="message"
						className="p-2 rounded shadow-inner"
						onChange={handleChange}
						value={contactState.message}
						rows="5"
						placeholder="Please include as much detail as possible."
					/>
				</div>
				<button
					variant="primary"
					className="px-3 py-2 mx-auto text-white bg-yellow-400 border-white rounded shadow-lg focus:outline-none"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
