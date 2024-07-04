import Banner from "components/Banner";
import styles from "./Play.module.css"
import { useParams } from "react-router-dom";
import Container from "components/Container";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState()
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Vineco77/cinetag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])
  
  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />

      <Container>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.Titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container>
    </>
  );
}

export default Player;
