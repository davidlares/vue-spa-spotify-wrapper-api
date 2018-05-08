import trae from 'trae'
import configService from './config'

// davidMusicService -> servicio que interactue con el API
// configService -> de configuracion
const davidMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default davidMusicService
