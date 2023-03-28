import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
      quibusdam, voluptas quisquam temporibus quis incidunt possimus quaerat ad
      nam illo est tempora, magni corrupti exercitationem laboriosam ducimus
      enim voluptatum excepturi.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=aweinfurter&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=aweinfurter&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
