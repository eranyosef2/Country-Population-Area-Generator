'use strict'

function onGetCountryInfo() {
    console.log('Hi')
    const countryName = document.getElementById('countryInput').value
    const preTag = document.getElementById('countryData')

    if (!countryName) {
        preTag.textContent = "Please enter a country name!"
        return
    }

    getCountryByName(countryName)
        .then(countryData => {
            renderInfo(countryData)
        })
        .catch(error => {
            preTag.textContent = "Error fetching country data!"
        })
}

function renderInfo(data) {
    const countryNameElem = document.getElementById('countryName')
    const countryFlagElem = document.getElementById('countryFlag')
    const countryPopulationElem = document.getElementById('countryPopulation')
    const countryAreaElem = document.getElementById('countryArea')


    countryNameElem.textContent = data.name.common
    countryFlagElem.src = data.flags.png
    countryFlagElem.alt = `Flag of ${data.name.common}`
     countryFlagElem.style.display = 'block'
    countryPopulationElem.textContent = `Population: ${data.population.toLocaleString()}`
    countryAreaElem.textContent = `Area: ${data.area.toLocaleString()} km²`
}


document.getElementById('fetchBtn').addEventListener('click', onGetCountryInfo)