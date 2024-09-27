import "./desktopImgSection.scss";
import desktopImg from "../../../assests/desktopbackground.jpg";

export default function DesktopBckComp() {
  return (
		<section>
			<div className="desktopbcksection">
				<img src={desktopImg} className="desktopimg" alt="Desktop background"></img>
			</div>
		</section>
	);
}
