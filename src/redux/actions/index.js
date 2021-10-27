export const changeSwitcher = () => {
  return ({
    type: "SWITCH_THEME"
  })
}

export const allFlags = (payload) => {
  return({
    type: "ADD_FLAGS",
    payload
  })
}

export const details = (payload) => {
  return ({
    type: "ALL_DETAILS",
    payload
  })
}

export const searchCountry = (payload) => {
  return ({
    type: "SEARCH_COUNTRY",
    payload
  })
}