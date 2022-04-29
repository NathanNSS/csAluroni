import { Prato } from "types";
import styles from "./TagsPrato.module.scss";

export default function TagsPrato({category, size, serving, price} : Prato) {
	return (
		<div className={styles.tags}>
			<div
				className={`
                            ${styles.tags__tipo} 
                            ${styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]}
                        `}
			>
				{category.label}
			</div>

			<div className={styles.tags__porcao}>{size * 1 < 1000 ? `${size + "g"}` : `${size / 1000 + "kg"}`}</div>
			<div className={styles.tags__qtdpessoas}>Serve {serving} pessoa{`${serving > 1 ? "s" : ""}`}</div>
			<div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
		</div>
	);
}