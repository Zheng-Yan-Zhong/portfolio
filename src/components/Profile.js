import React from 'react'
import avatar from '../images/avatar.jpeg'
import {
  Container,
  Wrapper,
  Avatar,
  Intro,
  Icon
} from '../styles/Profile.css'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsPersonDash, BsTelephone } from 'react-icons/bs'
import { MdOutlineDriveFileRenameOutline , MdOutlineEmail, MdMilitaryTech, MdOutlineAccessTime} from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
function Profile() {
  return (
    <Container>
      <Icon><BsPersonDash /> PROFILE</Icon>  
      <Wrapper>
        <Avatar src={avatar} />
        <Intro>
          <li><MdOutlineDriveFileRenameOutline /> 鄭燕中 Dennis Zheng</li>
          <li><IoSchoolOutline /> 景文科技大學 資訊工程系 <span>2017/09 - 2021/06</span></li>
          <li><MdMilitaryTech /> 2021/9/28 - 2022/01/18 </li>
          <li><MdOutlineEmail /> ococo09000@gmail.com</li>
          <li><AiOutlineGithub /> <a href="https://github.com/Zheng-Yan-Zhong">link to github</a></li>
          <li><BsTelephone /> 886 + 906930423</li>
          <li><MdOutlineAccessTime /> Monday - Saturday <b>9AM - 8PM</b></li>
        </Intro>
      </Wrapper>
    </Container>
  )
}

export default Profile