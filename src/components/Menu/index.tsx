import { ReactComponent as Logo } from "assets/logo.svg";
import {Link, useNavigate} from "react-router-dom";

import styles from "./Menu.module.scss";

export default function Menu() {
	const navigate = useNavigate();

	const rotas = [{
		label: "inicio",
		to: "/"
	},
	{
		label: "Cardapio",
		to: "/cardapio"
	},
	{
		label: "Sobre",
		to: "/sobre"
	}];
	
	return (
		<nav className={styles.menu}>
			<Logo onClick={()=> navigate("/")} style={{cursor:"pointer"}}/>
			<ul className={styles.menu__list}>
				{rotas.map((rota, index) => (
					<li key={index} className={styles.menu__link}>
						<Link to={rota.to}>
							{rota.label}
						</Link>
					</li>

				))}
			</ul>
		</nav>
	);
}