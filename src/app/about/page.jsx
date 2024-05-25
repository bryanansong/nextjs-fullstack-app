import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
	return (
		<div>
			<div className={styles.imageContainer}>
				<Image
					src="https://images.pexels.com/photos/24838633/pexels-photo-24838633/free-photo-of-the-fernsehturm-tower-in-berlin-germany.jpeg"
					alt=""
					fill
				/>
			</div>
		</div>
	);
};

export default AboutPage;
