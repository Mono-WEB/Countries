import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../redux/asyncActions";
import { searchCountry } from "../redux/actions";

export default function Details() {
  const infoCountry = useSelector((state) => state.allDetails[0]);
  const switchColor = useSelector((state) => state.switch);

  const dispatch = useDispatch();
  const { name } = useParams();
  const { goBack } = useHistory();

  function goToBack() {
    goBack();
    dispatch(searchCountry([]))
  }

  useEffect(() => {
    dispatch(fetchDetails(name));
  }, [dispatch, name]);

  return (
    <Container>
      <Button
        variant={switchColor ? "dark" : "light"}
        onClick={() => goToBack()}
        style={{ marginBottom: "30px" }}
      >
        Back
      </Button>

      {infoCountry && (
        <Row>
          <Col xs={12} md={6}>
            <WrapImg>
              <Img src={infoCountry.flags.svg}></Img>
            </WrapImg>
          </Col>
          <Col xs={12} md={6}>
            <Content bg={switchColor}>
              <Tabs defaultActiveKey="capital">
                <Tab eventKey="capital" title="Capital">
                  {infoCountry.capital[0]}
                </Tab>
                <Tab eventKey="continents" title="Continents">
                  {infoCountry.continents[0]}
                </Tab>
                <Tab eventKey="timezone" title="TimeZone">
                  {infoCountry.timezones}
                </Tab>
              </Tabs>
            </Content>
          </Col>
        </Row>
      )}
    </Container>
  );
}

const WrapImg = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: 600px;
  max-width: 100%;
`;
const Content = styled.div`
  background-color: ${(props) => (props.bg ? "white" : "black")};
  color: ${(props) => (props.bg ? "black" : "white")};
`;
