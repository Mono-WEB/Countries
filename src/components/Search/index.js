import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {searchCountry} from "../../redux/actions"


export default function Search() {
  const dispatch = useDispatch();
  const flags = useSelector( state => state.flags)

  const searchFunc = (e) => {
    const filterFlags = [...flags]
    let val = e.target.value
    let data = filterFlags.filter( c => c.name.common.toLowerCase().includes(val.toLowerCase()) )
    console.log(data)
    dispatch(searchCountry(data))
  };


  return (
    <Wrap>
      <input type="text" placeholder="Find country" onChange={searchFunc} />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-bottom: 50px;
  padding-left: 10px;
`;
