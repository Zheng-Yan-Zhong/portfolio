import React from 'react'
import Profile from '../components/Profile'
import rhcsa from '../images/rhcsa.png'
import rhce from '../images/rhce.png'
import {
  Container,
  Title,
  Text,
  Photo,
  Certify,
  ListItem
} from '../styles/About.css'
import { GrCertificate } from 'react-icons/gr'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
function About() {
  return (
    <Container>
      <Profile />
      <Title><BsReverseLayoutTextWindowReverse /> BIO</Title>
      <Text>於2017/9 進入景文科技大學就讀,大一參加教育優先區擔任小組長.</Text>
      <Text>大二時由於課程需接觸Linux作業系統,期末時報名紅帽系統管理員認證.接連在2019/01考取Rhcsa、2019/07考取Rhce.</Text>
      <Text>大四上發現網頁蠻有趣,於是在課餘時慢慢從HTML開始在Youtube摸索.</Text>
      <Text>在服兵役的過程中,更確定了想往前端走的志向,於退伍休息幾日後,便開始嘗試Demo一些作品.</Text>
      
      <Title><GrCertificate /> CERTIFICATION</Title>
      <Certify>
        <ListItem><Photo src={rhcsa} alt="Rhcsa" /></ListItem>
        <ListItem><Photo src={rhce} alt="Rhce" /></ListItem>
      </Certify>
    </Container>
  )
}

export default About