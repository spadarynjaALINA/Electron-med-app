

import React from "react";
import './header.css'
export default function Header()
{
	const close=()=>{
		window.api.quitApp()
	}
	return (
		<>
			<header>
				<div className="sp"></div>
				<div className="icon"></div>
				<div className="title">Старший врач</div>
				<div className="btn-min win-btn">

				</div>
				<div className="btn-max win-btn">	</div>
				<div className="btn-close win-btn" onClick={close}>	</div>
				<div className="sp"></div>
			</header>
		</>
	)
}