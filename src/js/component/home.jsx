
import React, { useEffect, useState} from "react";



//create your first component
const Home = () => {
	const [activeLight, setActiveLight] = useState(null);
	const [isRinning, setIsRunning] = useState(false);

	const lights = ['red', 'yellow', 'green'];

	useEffect(() =>{
		let interval;
		if(isRinning){
			interval = setInterval(()=> {
				const randomLight = lights[Math.floor(Math.random() * lights.length)];
				setActiveLight(randomLight);
			}, 500);
		}
		return () => clearInterval(interval)
	},[isRinning]);

	const toggleTrafficLight =()=>{
		setIsRunning(!isRinning)
	}

	return (
		<div className="col-12 mb-5">
			<div className="pole col-1">
			</div>
			<div className="traffic-light">
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

			<div className="col-12 mt-5 d-flex justify-content-center " >
				<button className="btn btn-danger px-5" onClick={toggleTrafficLight}>{isRinning ? 'Stop' : 'Start'}</button>
			</div>
		</div>
		

	);
};

export default Home;
