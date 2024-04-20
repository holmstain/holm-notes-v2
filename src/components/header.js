import React from 'react';
import { FaLightbulb } from "react-icons/fa";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Holm Notes v2</h1>
			<button
                className="darkmode-toggle"
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
			>
				<FaLightbulb className='darkmode-toggle'/>
			</button>
		</div>
	);
};

export default Header;