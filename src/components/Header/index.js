import React from "react";
import styled from "styled-components";

import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

import logowhite from "../../assets/img/logo-white.png";
import logoblack from "../../assets/img/logo-black.png";

import { useSelector, useDispatch } from "react-redux";
import { changeSwitcher } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const switchColor = useSelector((state) => state.switch);

  // function set params theme and transition effects
  const setColor = (c, t = 0.5) => {
    document.body.style.backgroundColor = c;
    document.body.style.transition = `all ${t} ease-out`;
  };

  // set color theme
  const changeColorTheme = () => {
    dispatch(changeSwitcher());

    if (switchColor) {
      setColor("black", 0.4);
    } else {
      setColor("white", 0.4);
    }
  };

  return (
    <Wrapper bg={switchColor}>
      <Container
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <Row
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Col xs={6}>
            <Logo>
              <Link to="/">
                <Img src={switchColor ? logoblack : logowhite} />
              </Link>
            </Logo>
          </Col>
          <Col xs={6}>
            <Switcher>
              {switchColor ? (
                <>
                  <BsMoon
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={changeColorTheme}
                  />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <BsFillMoonFill
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={changeColorTheme}
                  />
                  <span>Dark</span>
                </>
              )}
            </Switcher>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bg ? "white" : "black")};
  color: ${(props) => (props.bg ? "black" : "white")};
  box-shadow: ${(props) =>
    props.bg
      ? "0px 14px 19px -6px rgba(34, 60, 80, 0.2)"
      : "4px 4px 8px 0px rgba(255, 255, 255, 0.2)"};
  transition: all 0.5s ease-out;
`;
const Logo = styled.div`
  display: flex;
  width: 100px;
  padding: 10px 0;
`;
const Switcher = styled.div`
  margin-top: 30px;
`;
const Img = styled.img`
  width: 64px;
  margin: 0 auto;
`;
