import MD5 from 'crypto-js/md5'

const API_URL = import.meta.env.REACT_APP_BASE_URL

const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString()
}

const fetchHeroes = async (searchWord) => {
    let baseUrl = `${API_URL}/v1/public/characters`

    let ts = Date.now().toString()
    let apiKey = import.meta.env.REACT_APP_API_KEY
    let privateKey = import.meta.env.REACT_APP_PRIVATE_KEY
    let hash = getHash(ts, privateKey, apiKey)

    let url =`${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${searchWord}`

    try {
        let response = await fetch(url)
        console.log(response)
        let data = await response.json()
        

        return data
    } catch (err) {
        return 
    }
}

export {fetchHeroes}