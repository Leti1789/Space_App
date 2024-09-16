import { useState, useEffect } from "react";
import styled from "styled-components"
import GlobalStyles from "./Components/GlobalStyles";
import Cabecera from "./Components/Cabecera";
import BarraLateral from "./Components/BarraLateral";
import Banner from "./Components/Banner";
import Galeria from "./Components/Galeria";
import ModalZoom from "./Components/ModalZoom";
import Pie from "./Components/Pie";
import banner from "./assets/banner.png"
import fotos from "./fotos.json"



const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;

`

const AppContainer = styled.div`

  width: 1700px;
  max-width: 100%;
  margin:0 auto; 
  
`

const MainContainer = styled.main`
  display: flex;
  gap:40px;

`

const ContenidoGaleria = styled.section`
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  //UseState

  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);


  //UseEffect
  
  useEffect(() => {

    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
  }, [filtro, tag]);




  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !foto.favorita
      })
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))

    
  }




  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera
          filtro={filtro}
          setFiltro={setFiltro} />
          <MainContainer>
        <BarraLateral />
            <ContenidoGaleria>
            <Banner texto="La galeria mas completa del espacio" backgroundImage={banner} />
              <Galeria
                alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                fotos={fotosGaleria}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
        <Pie/>
      </FondoGradiente>
      
    </>
  )
}

export default App
