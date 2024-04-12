import React, { useState } from "react";


const Home = () => {

	const [playerInfo, setPlayerInfo] = useState({
		name: null,
		skill: null,
		age: null
	}
	);
	const [playerName, setPlayerName] = useState("");
	const [playerSkills, setPlayerSkills] = useState("");
	const [playerAge, setPlayerAge] = useState("");

	return (
		<div className="text-center">
			<div className="container w-25">
				<div className="row margin-auto">
					<div className="col mt-5 text-center">
						<label className="me-2">Insert Player Name</label>
						<input onKeyUp={(e) => {
							if (e.key == "Enter" && e.target.value != "") {
								setPlayerName(e.target.value)
							}
						}}></input>
						<label className="me-2 mt-3">Insert Player Skills</label>
						<input onKeyUp={(e) => {
							if (e.key == "Enter" && e.target.value != "") {
								setPlayerSkills(e.target.value)
							}
						}}></input>
						<label className="me-2  mt-3">Insert Player Age</label>
						<input onKeyUp={(e) => {
							if (e.key == "Enter" && e.target.value != "") {
								setPlayerAge(e.target.value)
							}
						}}></input>
					</div>
				</div>
			</div>

			<button className="btn btn-primary mt-3 me-2" onClick={() => {
				setPlayerInfo({ ...playerInfo, name: playerName, skill: playerSkills, age: playerAge });
			}}>CREATE</button>
			<button className="btn btn-danger mt-3" onClick={() => {
				setPlayerInfo({});
			}}>DELETE</button>

			<h1>Name: {playerInfo.name ? playerInfo.name : "Unknown Name"}</h1>
			<h3>Skills: {playerInfo.skill ? playerInfo.skill : "Unknown Skill"}</h3>
			<h3>Age: {playerInfo.age ? playerInfo.age : "Unknown age"}</h3>

			{console.log(playerInfo)}
			{console.log(playerInfo.name)}
			{console.log(playerInfo.skill)}
			{console.log(playerInfo.age)}
		</div>
	);
};

export default Home;
