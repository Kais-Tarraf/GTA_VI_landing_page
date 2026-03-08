import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const FirstVideo = () => {
	useGSAP(() => {
		gsap.set(".first-video-wrapper", {
			marginTop: "-150vh",
			opacity: 0,
		});
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".first-video-wrapper",
				start: "top top",
				end: "+=200% top",
				scrub: true,
				pin: true,
			},
		});
		tl.to(".hero-section", {
			delay: 0.5,
			opacity: 0,
			ease: "power1.inOut",
		}).to(".first-vd-wrapper", {
			opacity: 1,
			duration: 2,
			ease: "power1.inOut",
		});
		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current,
				{
					currentTime: videoRef.current.duration,
					duration: 3,
					ease: "power1.inOut",
				},
				"<"
			);
		};
	});
	const videoRef = useRef(null);
	return (
		<section className="first-vd-wrapper">
			<div className="h-dvh">
				<video
					src="/videos/output1.mp4"
					muted
					ref={videoRef}
					playsInline
					preload="auto"
					className="first-vd"
				></video>
			</div>
		</section>
	);
};

export default FirstVideo;
