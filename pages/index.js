// import styled from 'styled-components'
import MainGrid from '../pages/src/components/MainGrid'
import Box from '../pages/src/components/Box'
import {AlurakutMenu} from '../pages/src/lib/AlurakutCommons'


const gitHubUser = 'eduardobhubner';



function ProfileSlideBar(propriedades) {
  console.log(propriedades)
  return (
    <Box>
      <img src={`https://www.github.com/${propriedades.gitHubUser}.png`} style={{ borderRadiun: "8px" }} />
    </Box>
  )
}




export default function Home() {

const comunidades = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'felipefialho',
];

const pessoasFavoritas = [
  'juunegreiros',
  'omariosouto',
  'peas',
  'rafaballerini',
  'marcobrunodev',
  'felipefialho',
];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSlideBar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <Box>
            Pessoas da comunidade

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                      <img src={`https://github.com/${itemAtual}.png`} />
                  </li>
                )
              })
              }
            </ul>

          </Box>
        </div>
      </MainGrid>
    </>
  )
}
