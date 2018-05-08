import davidMusicService from './david-music'

const trackService = {}

trackService.search = function (q) {
  // el param q es un estandar de query
  const type = 'track'
  // valor hardcodeado hacia la API (tipo de busqueda)

  return davidMusicService.get('/search', { // se devuelve la promesa para que quien lo importe pueda usar el .then (chain promise)
    params: { q, type }
  })
    .then(res => res.data)
    .catch(err => console.log('API error ', err))
}

trackService.getById = function (id) {
  return davidMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
