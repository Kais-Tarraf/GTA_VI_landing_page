import { useRef } from "react";

const Final = () => {
	const videoRef = useRef(null);

	return (
		<section className="final">
			<div className="final-content size-full">
				<video
					src="/videos/output-3.mp4"
					ref={videoRef}
					muted
					playsInline
					preload="auto"
					className="size-full object-cover"
				/>
			</div>
		</section>
	);
};

export default Final;
