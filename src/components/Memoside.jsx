import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Memoside = () => {
  return (
    <SideBox>
      <Btncontent></Btncontent>
      <ContentBox onClick={() => {
      }}>
        <Content1>
          <Link to="../pages/Home">메인 페이지</Link>
        </Content1>
        <Content1>
          <Link to="../pages/Captain">선장의 일기</Link>
        </Content1>
        <Content1>
          <Link to="../pages/Sailor">선원의 일기</Link>
        </Content1>
        <Content1>
          <Link to="../pages/All">모두의 일기</Link>
        </Content1>
      </ContentBox>
    </SideBox>
  )
}

export default Memoside;


const SideBox = styled.div`
  width: 300px;
  height: 940px;
  outline: 1px solid #000;
  background-color: #eee;
  position: absolute;
`

const ContentBox = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: #ccc; */
  position: relative;
  top: 250px;
`

const Content1 = styled.p`
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  transition: 0.5s;
  &:hover {
    font-size: 18px;
    font-weight: 700;
    transition: 0.5s;
  }
`

const Btncontent = styled.p`
  width: 60px;
  height: 60px;
  outline: 1px solid #000;
  position: relative;
  left: 240px;
`