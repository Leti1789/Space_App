import styled from "styled-components";
import logo from "/img/logo.png"
import Search from "../CampoTexto";



const HeaderEstilizado = styled.header`

display: flex;
justify-content: space-between;
padding: 60px 0;

img{
  width: 212px;
}
`

function Cabecera({filtro, setFiltro}) {
  return (
    <HeaderEstilizado>
      <img src={logo} alt="logo" />
      <Search setFiltro={setFiltro} filtro={filtro} />
      
    </HeaderEstilizado>
  )
}

export default Cabecera