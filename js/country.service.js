'use strict'

function getCountryByName(name) {
    const cache = getCache()
    
    if (cache[name]) {
        console.log(`Serving ${name} from cache`)
        return Promise.resolve(cache[name])
    }

    return axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            const countryData = response.data.find(
                country => country.name.common.toLowerCase() === name.toLowerCase()
            )

            if (countryData) {
                cache[name] = countryData
                saveCache(cache)
                return countryData
            } else {
                throw new Error('Country not found')
            }
        })
}

function getCache() {
    const cache = localStorage.getItem('countryCache')
    return cache ? JSON.parse(cache) : {}
}

function saveCache(cache) {
    localStorage.setItem('countryCache', JSON.stringify(cache))
}
