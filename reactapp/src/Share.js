import React from "react";
import { RWebShare } from "react-web-share";
import ShareNav from "./ShareNav";
import Button from '@mui/material/Button';
import './Share.css'
export default function WebShareGfg() {
	return (
		<div>
			<ShareNav/>
			<div className="sharewhole">
			<div className="sharediv"></div>
			<div className="shareright"><div className="image12"></div>
			<div className="web">
			<RWebShare
				data={{
					text: "Share",
					url: "http://localhost:3000/login",
					title: "SurveyPlus",
				}}
				onClick={() => console.log("shared successfully!")}
			>
				<Button className="sharebut" variant="contained">Share on Web</Button>
			</RWebShare></div></div></div>
		</div>
	);
};
