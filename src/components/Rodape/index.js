import styles from "./Rodape.module.css"

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <h6 className={styles.texto}>
                Desenvolvido por Vinicius Ribeiro
            </h6>
        </footer>
    )
}

export default Rodape