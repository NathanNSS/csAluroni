import React, { useState } from 'react';

import styles from './Cardapio.module.scss';

import { ReactComponent as Logo } from "assets/logo.svg";

import Buscador from './components/Buscador';
import Filtros from './components/Filtros';
import Ordenador from './components/Ordenador';

export default function Cardapio() {
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("")


    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardarpio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
            </section>
        </main>
    )
}