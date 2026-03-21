import gsap from "gsap";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { ScrollTrigger } from "gsap/all";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<FirstVideo />
			<Jason />
			<SecondVideo />
		</main>
	);
};

export default App;
