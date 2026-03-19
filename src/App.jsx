import gsap from "gsap";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<FirstVideo />
		</main>
	);
};

export default App;
