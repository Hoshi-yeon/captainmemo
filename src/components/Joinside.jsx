import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Joinside = () => {
  return (
    <SideBox>
      <ContentBox>
        <Content1>
          <Link to="../pages/Login">로그인/로그아웃</Link>
        </Content1>
        <Content1>
          <Link to="../pages/Join">마이페이지</Link>
        </Content1>
      </ContentBox>
    </SideBox>
  )
}

export default Joinside


const SideBox = styled.div`
  width: 300px;
  height: 940px;
  outline: 1px solid #000;
  position: absolute;
  right: 0;
  top:0;
`

const ContentBox = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: pink; */
  position: relative;
  top: 350px;
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