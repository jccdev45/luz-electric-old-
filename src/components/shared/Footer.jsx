import React from "react";

export default function Footer() {
	return (
		<footer className="z-10 flex flex-col items-center justify-center p-2 text-white bg-primary">
			<span>&copy; {new Date().getFullYear()}</span>
			<span className="my-2">Luz Electric and Control Systems Inc</span>
		</footer>
	);
}
