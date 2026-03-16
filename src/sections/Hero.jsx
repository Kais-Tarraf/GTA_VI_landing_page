const Hero = () => {
	return (
		<section className="hero-section">
			<div className="size-full">
				<img
					src="/images/hero-bg.webp"
					alt="background"
					className="scale-out"
				/>
				<img
					src="/images/hero-text.webp"
					alt="hero-logo"
					className="title-logo"
				/>
				<img
					src="/images/watch-trailer.png"
					alt="trailer"
					className="trailer-logo"
				/>
				<div className="play-img">
					<img src="/images/play.png" alt="play" className="w-7 ml-1" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
