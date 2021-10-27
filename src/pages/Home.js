import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlags } from "../redux/asyncActions";
import CardItem from "./CardItem";
import { v4 } from "uuid";
import Search from "../components/Search";

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.flags);
  const flagsFilter = useSelector((state) => state.searchCountry);


  useEffect(() => {
    dispatch(fetchFlags());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Search />
        {flagsFilter.length <= 0
          ? countries.map((fl) => (
              <Col md={3} key={v4()}>
                <CardItem
                  im={fl.flags}
                  name={fl.name.common}
                  popul={fl.population}
                  region={fl.region}
                />
              </Col>
            ))
          : 
          flagsFilter.map((fl) => (
            <Col md={3} key={v4()}>
              <CardItem
                im={fl.flags}
                name={fl.name.common}
                popul={fl.population}
                region={fl.region}
              />
            </Col>
          ))
          }
      </Row>
    </Container>
  );
}
