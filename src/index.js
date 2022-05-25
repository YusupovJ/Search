/* Библиотеки */
import React from "react";
import ReactDOM from "react-dom/client";

/* Стили */
import "./styles/style.scss";

/* Context API */
import Global from "./config/Global";
import App from "./components/App";

/*------------------------------------*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Global>
			<App></App>
		</Global>
	</React.StrictMode>,
);
