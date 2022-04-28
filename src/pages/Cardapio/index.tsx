import React, { useState } from "react";

import styles from "./Cardapio.module.scss";
import stylesTema from "styles/Tema.module.scss";

import Buscador from "./components/Buscador";
import Filtros from "./components/Filtros";
import Ordenador, { OpcoesOrdenador } from "./components/Ordenador";
import Itens from "./components/Itens";

export default function Cardapio() {
	const [busca, setBusca] = useState("");
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("");

	return (
		<section className={stylesTema.cardapio}>
			<h3 className={stylesTema.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
		</section>
	);
}