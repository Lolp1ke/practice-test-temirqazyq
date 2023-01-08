import React from "react";

import "./styles/style.css";
import stepsData from "./stepsData.json"

function App() {
	return (
		<>
			<main className="food">
				<article className="food__article">
					<h1 className="food__title">How does it work?</h1>
					<p className="food__text">Producers, who don’t want to waste their products can sell it at a discount price and consumers canbuy it</p>
					<a href="#some-link" className="food__button">Get started<img src={process.env.PUBLIC_URL + "/images/arrow.svg"} alt="arrow" /></a>
				</article>
				<img className="food__img" src={process.env.PUBLIC_URL + "/images/pyramid.png"} alt="food-pyramid" />
			</main>
			<ol className="list">
				{
					stepsData.map((item, index) => {
						return (
							<li className="list__item" key={index}>
								<p className="list__number">{index + 1}</p>
								<h2 className="list__title">{item.title}</h2>
								<p className="list__description">{item.description}</p>
							</li>
						)
					})
				}
			</ol>
		</>
	);
}

export default App;
