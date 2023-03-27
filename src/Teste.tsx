import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotalPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Clique aqui</Botao>
      <Botao fontSize="14px" principal={false}>
        cancelar
      </Botao>
      <BotalPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotalPerigo>
    </>
  )
}

export default Teste
