import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Creative Thoughts Agency.</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
					officiis placeat nobis ducimus obcaecati iusto, adipisci iure qui
					quae consequatur libero cumque exercitationem consequuntur
					explicabo amet sunt enim aliquid error.
				</p>
				<div className={styles.buttons}>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>
				<div className={styles.brands}>
					<Image
						src="/brands.png"
						className={styles.brandImg}
						fill
					/>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image
					src="/hero.gif"
					className={styles.heroImg}
					fill
				/>
			</div>
		</div>
	);
};

export default Home;
