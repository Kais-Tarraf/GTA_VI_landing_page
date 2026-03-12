import Final from "./sections/Final";
import FirstVideo from "./sections/FirstVideo";
import Hero from "./sections/Hero";
import Jason from "./sections/Jason";
import Lucia from "./sections/Lucia";
import NavBar from "./sections/Navbar";
import Postcard from "./sections/Postcard";
import SecondVideo from "./sections/SecondVideo";
const App = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<FirstVideo />
			<Jason />
			<SecondVideo />
			<Lucia />
			<Postcard />
			<Final />
		</main>
	);
};

export default App;
