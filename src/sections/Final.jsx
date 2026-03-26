import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Final = () => {
	useGSAP(() => {
		gsap.set(".final-content", { opacity: 0 });
		gsap.timeline({
			scrollTrigger: {
				trigger: ".final",
				start: "top top",
				end: "90% top",
				scrub: true,
				pin: true,
			},
		});
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".final",
				start: "top 80%",
				end: "90% top",
				scrub: true,
			},
		});
		tl.to(".final-content", {
			opacity: 1,
			duration: 1,
			scale: 1,
			ease: "power1.inOut",
		});
		VideoRef.current.onloadedmetadata = () => {
			tl.to(
				VideoRef.current,
				{
					currentTime: VideoRef.current.duration,
					duration: 3,
					ease: "power1.inOut",
				},
				"<"
			);
		};
	}, []);
	const VideoRef = useRef(null);
	return (
		<section className="final">
			<div className="final-content size-full">
				<video
					ref={VideoRef}
					src="/videos/output3.mp4"
					className="size-full object-cover"
					muted
					playsInline
					preload="auto"
				/>
			</div>
		</section>
	);
};

export default Final;
