import React, { useRef, useState } from 'react'
import {
  Container,
  Wrapper,
  Bar,
  InputContainer,
  Icon,
  Menu,
  List,
  Cards,
  Card,
  DropDown
} from '../styles/Note.css.js'
import '../styles/csstransition.css'
import noteList from '../data/noteList.js'
import { MdOutlineSearch, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiLinkExternal } from 'react-icons/bi'
import { CSSTransition } from 'react-transition-group'
import { Link, Outlet } from 'react-router-dom'
function Note() {
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const [isOpen, setIsopen] = useState(false)
  const [js, setJs] = useState(false)
  const [reactJs, setReactJs] = useState(false)
  return (
    <Container>
      <Bar>
        <Icon onClick={() => setIsopen(!isOpen)}><BiLinkExternal /></Icon>
      </Bar>
      <Wrapper>
          {isOpen && <Menu>
            <List>
              HTML<MdOutlineKeyboardArrowDown /> 
            </List>
            <List>CSS<MdOutlineKeyboardArrowDown /> </List>
            <List onClick={() => setJs(!js)}>JavaScript<MdOutlineKeyboardArrowDown /> 
              {js && <ul>
                  <li><Link to="/myportfolio/note/js/variables">Variables</Link></li>
                  <li><Link to="/">Data-Types</Link></li>
                  <li><Link to="/">Function</Link></li>
                  <li><Link to="/">Operators</Link></li>
                </ul>}
            </List>
            <List onClick={() => setReactJs(!reactJs)}>React.js<MdOutlineKeyboardArrowDown /> 
              { reactJs && <ul>
                <li><a href="">What is React</a></li>
                <li><a href="">JSX</a></li>
                <li><a href="">Component</a></li>
                <li><a href="">Props</a></li>
                <li><a href="">Hooks</a></li>
                <li><a href="">React-Router</a></li>
                <li><a href="">Redux</a></li>
              </ul>}
            </List>
            <List>Express.js <MdOutlineKeyboardArrowDown /> </List>
            <List>Git <MdOutlineKeyboardArrowDown /> </List>
          </Menu>}
          <Outlet />
        
      </Wrapper>
    </Container>
  )
}

export default Note