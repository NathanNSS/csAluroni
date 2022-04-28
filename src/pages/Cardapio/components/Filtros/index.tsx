import styles from "./Filtros.module.scss";

import filtros from "./filtros.json";

interface Props {
    filtro: null | number;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

interface Opcao {
    id: number;
    label: string;
}

//Metodo dinamico de obter as tipagens do objeto JSON
//type Filtros2 = typeof filtros[0];

export default function Filtros({ filtro, setFiltro }: Props) {

	function selecionarFiltro(opcao: Opcao) {
		if(filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	}
    
	return (
		<div className={styles.filtros} >
			{filtros.map((opcao) => (
				<button
					key={opcao.id}
					className={`
                        ${styles.filtros__filtro}
                        ${filtro === opcao.id ? styles[`filtros__filtro__${opcao.label.toLocaleLowerCase()}--ativo`] : ""} 
                    `}
					onClick={() => selecionarFiltro(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}