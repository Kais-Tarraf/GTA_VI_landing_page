const FirstVideo = () => {
	return (
		<section className="first-vd-wrapper">
			<div className="h-dvh">
				<video
					src="/videos/output1.mp4"
					className="first-vd"
					muted
					playsInline
					preload="auto"
				/>
			</div>
		</section>
	);
};

export default FirstVideo;
