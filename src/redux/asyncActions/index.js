import { URL_ALL } from "../../config";
import { allFlags } from "../actions";
import { details } from "../actions";

export const fetchFlags = () => {
  return function (dispatch) {
    fetch(URL_ALL)
      .then((res) => res.json())
      .then((data) => dispatch(allFlags(data)))
      .catch((err) => console.error(err));
  };
};

export const fetchDetails = (name) => {
  const n = name.toLowerCase();
  return function (dispatch) {
    fetch(`https://restcountries.com/v3.1/name/${n}`)
      .then((res) => res.json())
      .then((data) => dispatch(details(data)));
  };
};
