import React from 'react';
import {
  Container,
  ProjectLogo,
  ProjectShow,
  Gif,
  Detail,
} from '../styles/ProjectList.css';
import eShop from '../gif/e-shop.gif';
import todo from '../gif/todo.gif';
import mern from '../gif/mern.gif';
import markdown from '../gif/markdown.gif';
import vue from '../gif/vue.gif';
import { FaProjectDiagram } from 'react-icons/fa';
function ProjectList() {
  return (
    <Container>
      <ProjectLogo>
        <FaProjectDiagram /> PROJECTS
      </ProjectLogo>
      <ProjectShow>
        <Gif src={todo} alt="" />
        <Detail>
          <h4>Todo-app</h4>
          <p>
            實做簡易備忘錄<span>並且使用LocalStorage實現暫存</span>
          </p>

          <ul>
            <li>React.js</li>
            <li>localStorage</li>
          </ul>
          <a href="https://zheng-yan-zhong.github.io/todo-app">Todo-app</a>
        </Detail>
      </ProjectShow>
      <ProjectShow>
        <Gif src={markdown} alt="" />
        <Detail>
          <h4>Markdown</h4>
          <p>
            實做簡易Markdown編輯器<span>並且使用LocalStorage實現暫存</span>
          </p>

          <ul>
            <li>React.js</li>
            <li>react-markdown</li>
            <li>react-syntax-highlight</li>
            <li>localStorage</li>
          </ul>
          <a href="https://zheng-yan-zhong.github.io/react-markdown">
            Markdown
          </a>
        </Detail>
      </ProjectShow>
      <ProjectShow>
        <Gif src={mern} alt="" />
        <Detail>
          <h4>MERN crud</h4>
          <p>實做簡易crud</p>

          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>bcrypt</li>
            <li>MongoDB Atlas</li>
          </ul>
          <a href="https://github.com/Zheng-Yan-Zhong/MERN-clone">
            MongoDB CRUD
          </a>
        </Detail>
      </ProjectShow>

      <ProjectShow>
        <Gif src={eShop} alt="" />
        <Detail>
          <h4>E-shop</h4>
          <p>
            簡易製作購物車,實現登入登出及加密驗證使用者.
            <span>並且使用Redux實現全局資料管理</span>
            <br />
          </p>

          <ul>
            <li>React.js</li>
            <li>Redux</li>
            <li>MongoDB Atlas</li>
            <li>Express.js</li>
            <li>bcrypt</li>
            <li>jsonwebtoken</li>
          </ul>
          <a href="https://zheng-yan-zhong.github.io/e-shop-client">
            e-shop demo
          </a>
        </Detail>
      </ProjectShow>
      <ProjectShow>
        <Gif src={vue} alt="" />
        <Detail>
          <h4>Vue-clone</h4>
          <p>
            簡易使用Vue3
            <br />
          </p>

          <ul>
            <li>Pinia</li>
            <li>Vue Router</li>
          </ul>
        </Detail>
      </ProjectShow>
    </Container>
  );
}

export default ProjectList;
