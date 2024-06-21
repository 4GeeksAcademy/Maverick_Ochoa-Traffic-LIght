
import React, { useState} from "react";



//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null);
	return (
		<div className="traffic-light mt-5">
			<div
				className={`light red ${activeLight === 'red' ? 'active' : ''}`}
				onClick={() => setActiveLight('red')}
			/>
			<div
				className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
				onClick={() => setActiveLight('yellow')}
			/>
			<div
				className={`light green ${activeLight === 'green' ? 'active' : ''}`}
				onClick={() => setActiveLight('green')}
			/>
			

    	</div>

	);
};

export default Home;
