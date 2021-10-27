import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {Container} from 'react-bootstrap';

export default function Footer() {
  const switchColor = useSelector(state => state.switch)
  return (
    <Wrapper bg={switchColor}>
      <Container>
        @2021
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding-top: 40px;
  text-align: center;
  margin-top: 50px;
  width: 100%;
  height: 100px;
  background-color: ${(props) => (props.bg ? "white" : "black")};
  color: ${(props) => (props.bg ? "black" : "white")};
  box-shadow: ${(props) =>
    props.bg
      ? "0px -14px 19px -6px rgba(34, 60, 80, 0.2)"
      : "4px -4px 8px 0px rgba(255, 255, 255, 0.2)"};
  transition: all 0.5s ease-out;
`