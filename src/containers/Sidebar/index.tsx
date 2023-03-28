import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>André Weinfurter</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        aweinfurter
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Fullstack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
