'use strict'

function onGetCountryInfo() {
    console.log('Hi')
    const countryName = document.getElementById('countryInput').value
    const preTag = document.getElementById('countryData')

    if (!countryName) {
        preTag.textContent = "Please enter a country name!"
        return
    }

    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            renderInfo(response.data[0])
        })
        .catch(error => {
            preTag.textContent = "Error fetching country data!"
        })
}

function renderInfo(data) {
    console.log('Rendering...')
    const preTag = document.getElementById('countryData')
    preTag.textContent = JSON.stringify(data, null, 2)
}

document.getElementById('fetchBtn').addEventListener('click', onGetCountryInfo)
