import Skill from '../components/Skill';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';
import { Content } from '../styles/Content';
import Profile from '../components/Profile';
import { Link } from 'react-router-dom';
import { CgDetailsMore } from 'react-icons/cg';
function Home() {
  return (
    <Content>
      <Profile />
      <Link
        style={{ fontSize: '1rem', color: 'lightgrey' }}
        to="/myportfolio/about"
      >
        <CgDetailsMore />
        查看完整資料...
      </Link>
      <Skill />
      <ProjectList />
      <Contact />
    </Content>
  );
}

export default Home;
