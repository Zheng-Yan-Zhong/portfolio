import Skill from '../components/Skill'
import Contact from '../components/Contact'
import ProjectList from '../components/ProjectList'
import { Content } from '../styles/Content'

function Home() {
  return (
    <Content>
      <Skill />   
      <ProjectList />
      <Contact />
  </Content>
  )
}

export default Home