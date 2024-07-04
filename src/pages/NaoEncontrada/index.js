import Container from "components/Container"
import styles from "./NaoEncontrada.module.css"
import Titulo from "components/Titulo"

function NaoEncontrada() {
    return (
        <Container>
            <Titulo>
                <h2>Ops!</h2>
                <p>O conteúdo que você procura não foi encontrado!</p>
            </Titulo>
        </Container>
    )
}

export default NaoEncontrada