import styles from './Item.module.scss';
import cardapio from '../../itens.json';

type Icardapio = typeof cardapio[0];

export default function Item(props: Icardapio) {
    const { title, description, category, size, serving, price, photo } = props
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title}</h2>
                    <p> {description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div
                        className={`
                            ${styles.item__tipo} 
                            ${styles[`item__tipo__${category.label.toLocaleLowerCase()}`]}
                        `}
                    >
                        {category.label}
                    </div>

                    <div className={styles.item__porcao}>{size * 1 < 1000 ? `${size + 'g'}` : `${size / 1000 + 'kg'}`}</div>
                    <div className={styles.item__qtdpessoas}>Serve {serving} pessoa{`${serving > 1 ? 's' : ''}`}</div>
                    <div className={styles.item__valor}>R$ {price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}