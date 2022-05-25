import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const Global = ({ children }) => {
	const getData = async (url) => {
		await fetch(url)
			.then((response) => response.json())
			.then((response) => setData(response));
	};

	useEffect(() => {
		getData("https://jsonplaceholder.typicode.com/users");
	}, []);

	const [data, setData] = useState([]);

	return <GlobalContext.Provider value={{ data, setData }}>{children}</GlobalContext.Provider>;
};

export default Global;
