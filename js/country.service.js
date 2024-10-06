'use strict'

function getCountryByName(name) {
    return axios.get(`https://restcountries.com/v3.1/name/${name}`)
}