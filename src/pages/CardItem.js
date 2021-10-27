import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CardItem({ name, popul, region, im }) {
  const switchColor = useSelector((state) => state.switch);

  const { push } = useHistory();

  return (
    <Wrap clr={switchColor} onClick={() => push(`/country/${name}`)}>
      <Img src={im.png} />
      <div>
        <span>Name:</span> {name}
      </div>
      <div>Population: {popul}</div>
      <div>Region: {region}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 50px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props) => (props.clr ? "black" : "white")};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.clr
      ? "0px 14px 19px -6px rgba(34, 60, 80, 0.2)"
      : "4px 4px 8px 0px rgba(255, 255, 255, 0.2)"};
  transition: all 0.5s ease-out;
`;

const Img = styled.img`
  object-fit: cover;
  max-width: 300px;
  height: 150px;
  width: 100%;
`;
