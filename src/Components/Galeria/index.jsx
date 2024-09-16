import Titulo from "../Titulo";
import Tags from "./Tags/index"
import Populares from "./Populares/Index";
import Imagen from "./Imagen";
import styled from "styled-components";

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`;

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito, setTag }) => {

    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                        alAlternarFavorito= {alAlternarFavorito}
                        alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria