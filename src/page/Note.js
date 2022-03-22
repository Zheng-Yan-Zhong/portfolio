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

function Note() {
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const [isOpen, setIsopen] = useState(false)

  return (
    <Container>
      <Bar>
        <Icon onClick={() => setIsopen(!isOpen)}><BiLinkExternal /></Icon>
        <InputContainer>
            <input ref={inputRef} value={search} type="text" placeholder='search...' onChange={(e) => setSearch(e.target.value)}/>
            <i onClick={() => inputRef.current.focus()}><MdOutlineSearch /></i>
        </InputContainer>
      </Bar>
      <Wrapper>
          {isOpen && <Menu>
            <List>
              HTML<MdOutlineKeyboardArrowDown /> 
              <DropDown>
                <a href="/">DOM & BOM</a>
                <a href="/">HTTP Status</a>
                <a href="/">HTML tags</a>
                <a href="/">Attributes</a>
              </DropDown>
            </List>
            <List>CSS<MdOutlineKeyboardArrowDown /> </List>
            <List>JavaScript<MdOutlineKeyboardArrowDown /> </List>
            <List>React.js<MdOutlineKeyboardArrowDown /> </List>
            <List>Express.js <MdOutlineKeyboardArrowDown /> </List>
            <List>Git <MdOutlineKeyboardArrowDown /> </List>
          </Menu>}
        <Cards>
            { 
            noteList.filter((item) => {
                if(item.title.toLowerCase() === search.toLowerCase()) {
                  return item
                } else if(item.title.toLowerCase().includes(search.toLowerCase())){
                  return item
                } 
              }).map((item, key) => {
                return <a href={item.link} key={key.toString()}>
                  <Card >
                    <span>{item.title}</span>
                    <p>{item.content}</p>
                </Card>
                </a>
              }) 
            } 
        </Cards>
      </Wrapper>
    </Container>
  )
}

export default Note