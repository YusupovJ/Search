import React, { useState, useContext } from "react";
import { Search, Main } from "../styles/components/App";
import { GlobalContext } from "../config/Global";
import loading from "../assets/svg/loading.svg";

const App = (props) => {
	const { data } = useContext(GlobalContext);
	const [search, setSearch] = useState("");

	return (
		<div className="wrapper">
			<Search className="search">
				<div className="search__container">
					<h1>Search user</h1>
					<input type="text" placeholder="Search" className="search__input" onChange={(e) => setSearch(e.target.value)} />
				</div>
			</Search>
			<Main className="content">
				<div className="content__container">
					{data.length > 0 ? (
						data
							.filter((card) => {
								if (search === "") {
									return true;
								}
								return card.name.toLowerCase().trim().includes(search.toLowerCase().trim());
							})
							.concat(undefined)
							.map((card, index, arr) => {
								if (arr.length === 1) {
									return (
										<p key={index} className="content__defined">
											Ничего не найдено:{"("}
										</p>
									);
								}
								if (card) {
									return (
										<div key={card.id} className="card">
											<p className="card__name">
												<span>{card.id}.</span>
												{card.name}
											</p>
										</div>
									);
								}
							})
					) : (
						<img src={loading} alt="loading" className="loading" />
					)}
				</div>
			</Main>
		</div>
	);
};

export default App;
